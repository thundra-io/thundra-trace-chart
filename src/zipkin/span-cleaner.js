import _ from 'lodash';

export function normalizeTraceId(traceId) {
  if (traceId.length > 16) {
    const result = traceId.padStart(32, '0');
    // undo prefix if it will result in a 64-bit trace ID
    if (result.startsWith('0000000000000000')) return result.substring(16);
    return result;
  }
  return traceId.padStart(16, '0');
}

function isEndpoint(endpoint) {
  return endpoint && Object.keys(endpoint).length > 0;
}

// This cleans potential dirty v2 inputs, like normalizing IDs etc. It does not affect the input
export function clean(span) {
  const res = {
    traceId: normalizeTraceId(span.traceId),
  };

  // take care not to create self-referencing spans even if the input data is incorrect
  const id = span.id.padStart(16, '0');
  if (span.parentId) {
    const parentId = span.parentId.padStart(16, '0');
    if (parentId !== id) res.parentId = parentId;
  }
  res.id = id;

  if (span.name && span.name !== '' && span.name !== 'unknown') res.name = span.name;
  if (span.kind) res.kind = span.kind;

  if (span.timestamp) res.timestamp = span.timestamp;
  if (span.duration) res.duration = span.duration;

  if (isEndpoint(span.localEndpoint)) res.localEndpoint = Object.assign({}, span.localEndpoint);
  if (isEndpoint(span.remoteEndpoint)) res.remoteEndpoint = Object.assign({}, span.remoteEndpoint);

  res.annotations = span.annotations ? span.annotations.slice(0) : [];
  if (res.annotations.length > 1) {
    res.annotations = _(_.unionWith(res.annotations, _.isEqual)).sortBy('timestamp', 'value').value();
  }

  res.tags = span.tags || {};
  // console.log("span-cleaner; tags: ", res.tags);

  if (span.debug) res.debug = true;
  // shared is for the server side, unset it if accidentally set on the client side
  if (span.shared && span.kind !== 'CLIENT') res.shared = true;

  return res;
}

// exposed for testing. assumes spans are already clean
export function merge(left, right) {
  const res = {
    traceId: right.traceId.length > 16 ? right.traceId : left.traceId,
  };

  const parentId = left.parentId || right.parentId;
  if (parentId) res.parentId = parentId;

  res.id = left.id;
  const name = left.name || right.name;
  if (name) res.name = name;

  const kind = left.kind || right.kind;
  if (kind) res.kind = kind;

  const timestamp = left.timestamp || right.timestamp;
  if (timestamp) res.timestamp = timestamp;
  const duration = left.duration || right.duration;
  if (duration) res.duration = duration;

  const localEndpoint = Object.assign({}, left.localEndpoint, right.localEndpoint);
  if (isEndpoint(localEndpoint)) res.localEndpoint = localEndpoint;
  const remoteEndpoint = Object.assign({}, left.remoteEndpoint, right.remoteEndpoint);
  if (isEndpoint(remoteEndpoint)) res.remoteEndpoint = remoteEndpoint;

  if (left.annotations.length === 0) {
    res.annotations = right.annotations;
  } else if (right.annotations.length === 0) {
    res.annotations = left.annotations;
  } else {
    res.annotations = _(_.unionWith(left.annotations, right.annotations, _.isEqual))
      .sortBy('timestamp', 'value')
      .value();
  }

  res.tags = Object.assign({}, left.tags, right.tags);
  // console.log("span-cleaner; left, right, tags: ", left, right, res.tags);

  if (left.debug || right.debug) res.debug = true;
  if (left.shared || right.shared) res.shared = true;
  return res;
}

// compares potentially undefined input
export function compare(a, b) {
  if (!a && !b) return 0;
  if (!a) return -1;
  if (!b) return 1;
  return (a > b) - (a < b);
}

function isUndefined(ref) {
  return typeof ref === 'undefined';
}

/*
 * Put spans with null endpoints first, so that their data can be attached to the first span with
 * the same ID and endpoint. It is possible that a server can get the same request on a different
 * port. Not addressing this.
 */
function compareEndpoint(left, right) {
  // handle nulls first
  if (isUndefined(left)) return -1;
  if (isUndefined(right)) return 1;

  const byService = compare(left.serviceName, right.serviceName);
  if (byService !== 0) return byService;
  const byIpV4 = compare(left.ipv4, right.ipv4);
  if (byIpV4 !== 0) return byIpV4;
  return compare(left.ipv6, right.ipv6);
}

// false or null first (client first)
function compareShared(left, right) {
  const leftNotShared = isUndefined(left.shared) || !left.shared;
  const rightNotShared = isUndefined(right.shared) || !right.shared;

  if (leftNotShared && rightNotShared) {
    return left.kind === 'CLIENT' ? -1 : 1;
  }
  if (leftNotShared) return -1;
  if (rightNotShared) return 1;
  return 0;
}

export function cleanupComparator(left, right) {
  // exported for testing
  const bySpanId = compare(left.id, right.id);
  if (bySpanId !== 0) return bySpanId;
  const byShared = compareShared(left, right);
  if (byShared !== 0) return byShared;
  return compareEndpoint(left.localEndpoint, right.localEndpoint);
}

function tryMerge(current, endpoint) {
  if (!endpoint) return true;
  if (current.serviceName && endpoint.serviceName && current.serviceName !== endpoint.serviceName) {
    return false;
  }
  if (current.ipv4 && endpoint.ipv4 && current.ipv4 !== endpoint.ipv4) {
    return false;
  }
  if (current.ipv6 && endpoint.ipv6 && current.ipv6 !== endpoint.ipv6) {
    return false;
  }
  if (current.port && endpoint.port && current.port !== endpoint.port) {
    return false;
  }
  if (!current.serviceName) {
    current.serviceName = endpoint.serviceName; // eslint-disable-line no-param-reassign
  }
  if (!current.ipv4) current.ipv4 = endpoint.ipv4; // eslint-disable-line no-param-reassign
  if (!current.ipv6) current.ipv6 = endpoint.ipv6; // eslint-disable-line no-param-reassign
  if (!current.port) current.port = endpoint.portAsInt; // eslint-disable-line no-param-reassign
  return true;
}

// sort by timestamp, then name, root/shared first in case of skew
export function spanComparator(a, b) {
  // exported for testing
  if (!a.parentId && b.parentId) {
    // a is root
    return -1;
  }
  if (a.parentId && !b.parentId) {
    // b is root
    return 1;
  }

  // order client first in case of shared spans (shared is always server)
  if (a.id === b.id) return compareShared(a, b);

  // Either a and b are root or neither are. sort by shared timestamp, then name
  return compare(a.timestamp, b.timestamp) || compare(a.name, b.name);
}

/*
 * Spans can be sent in multiple parts. Also client and server spans can share the same ID. This
 * merges both scenarios.
 */
export function mergeV2ById(spans) {
  let { length } = spans;
  if (length === 0) return spans;

  const result = [];

  // Let's cleanup any spans and pick the longest ID
  let traceId;
  // console.log("mergeV2ById; spans, traceId; ", spans, traceId);
  spans.forEach(span => {
    const cleaned = clean(span);
    if (!traceId || traceId.length !== 32) traceId = cleaned.traceId;
    result.push(cleaned);
  });

  if (length <= 1) return result;
  result.sort(cleanupComparator);

  // Now start any fixes or merging
  let last;
  for (let i = 0; i < length; i += 1) {
    let span = result[i];

    // Choose the longest trace ID
    if (span.traceId.length !== traceId.length) {
      span.traceId = traceId;
    }

    const localEndpoint = span.localEndpoint ? Object.assign({}, span.localEndpoint) : {};
    while (i + 1 < length) {
      const next = result[i + 1];
      if (next.id !== span.id) break;

      // This cautiously merges with the next span, if we think it was sent in multiple pieces.
      if (span.shared === next.shared && tryMerge(localEndpoint, next.localEndpoint)) {
        span = merge(span, next);

        // remove the merged element
        length -= 1;
        result.splice(i + 1, 1);
        continue;
      }
      break;
    }

    // Zipkin and B3 originally used the same span ID between client and server. Some
    // instrumentation are inconsistent about adding the shared flag on the server side. Since we
    // have the entire trace, and it is ordered client-first, we can correct a missing shared flag.
    if (last && last.id === span.id) {
      // Backfill missing shared flag as some instrumentation doesn't add it
      if (last.kind === 'CLIENT' && span.kind === 'SERVER' && !span.shared) {
        span.shared = true;
      }

      // handle a shared RPC server span that wasn't propagated its parent span ID
      if (span.shared && !span.parentId && last.parentId) {
        span.parentId = last.parentId;
      }
    }

    last = span;
    result[i] = span;
  }

  return result.sort(spanComparator);
}
