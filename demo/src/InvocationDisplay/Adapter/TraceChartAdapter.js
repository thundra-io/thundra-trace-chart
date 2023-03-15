import { SpanConstants } from './Contants/ServiceNames';

const runClipCmd = (cmdObj, span) => {
  switch (cmdObj.cmd) {
    case 'operation':
      let title = span.operationName;
      // If class is method, split accirding to the .(dot) char.
      if (span.className.toLowerCase() === 'method') {
        title = span.operationName.split('.').reverse()[0];
      }

      return title;
    case 'static':
      return cmdObj.val;

    case 'tag-prop':
      if (span.tags !== undefined && span.tags[cmdObj.val] !== undefined) return span.tags[cmdObj.val];
      else return cmdObj.default;

    case 'tag-prop-arr':
      if (span.tags !== undefined) {
        let arr = [];
        cmdObj.val.forEach(elem => {
          if (span.tags[elem] !== undefined) arr.push(span.tags[elem]);
        });
        let text = arr.join(cmdObj.join);
        return text;
      } else return cmdObj.default;

    default:
      return '';
  }
};

export const convertAPMSpansToThundraTraceChartSpans = spans => {
  const thundraTraceChartSpans = [];
  spans.forEach(span => {
    const spanConst = SpanConstants[span.className];

    // This is to handle if className is empty then, spanConst become undefined.
    let bigTitle = ' '; // empty string is not supported, we show space if no className is provided.
    let smallTitle = ' ';

    if (spanConst !== undefined) {
      bigTitle = spanConst.text;
    }

    if (spanConst !== undefined && spanConst.textClipCode !== undefined) {
      bigTitle = runClipCmd(spanConst.textClipCode.bigTitleCmd, span);
      smallTitle = runClipCmd(spanConst.textClipCode.smallTitleCmd, span);
    } else {
      // If there is no className defined for the span, then set small title to operationName
      if (!!span.operationName) {
        // handle if span operation name is empty
        if (span.className.toLowerCase() === 'method') {
          smallTitle = span.operationName.split('.').reverse()[0];
        } else {
          smallTitle = span.operationName;
        }
      }
    }

    thundraTraceChartSpans.push({
      id: span.id,
      traceId: span.traceId,
      parentId: span.parentSpanId,
      name: span.operationName,
      timestamp: span.startTimestamp,
      duration: span.duration * 1000,
      serviceName: bigTitle,
      name: smallTitle,
      markerColor: spanConst?.backgroundColor,
      color: spanConst?.backgroundColor,
      backgroundClass: span?.tags?.error ? 'erroneous-span' : undefined,
    });
  });

  return thundraTraceChartSpans;
};
