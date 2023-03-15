import { SERVICES_CLASS_NAMES } from './Contants/ServiceNames';

export const convertAPMSpansToThundraTraceChartSpans = spans => {
  const thundraTraceChartSpans = [];
  spans.forEach(span => {
    const serviceAsset = SERVICES_CLASS_NAMES[span.className]?.asset;

    thundraTraceChartSpans.push({
      id: span.id,
      traceId: span.traceId,
      parentId: span.parentSpanId,
      name: span.operationName,
      timestamp: span.startTimestamp,
      duration: span.duration * 1000,
      serviceName: serviceAsset?.text,
      markerColor: serviceAsset?.color,
      color: serviceAsset?.color,
      backgroundClass: span?.tags?.error ? 'erroneous-span' : undefined,
    });
  });

  return thundraTraceChartSpans;
};
