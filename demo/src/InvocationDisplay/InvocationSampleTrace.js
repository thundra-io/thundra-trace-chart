import React from 'react';
import { convertAPMSpansToThundraTraceChartSpans } from './Adapter/TraceChartAdapter';
import { invocationSample0 } from './APMData/InvocationSample0';

export function getInvocationData() {
  return convertAPMSpansToThundraTraceChartSpans(invocationSample0);
}

export function getInvocationDataDetails() {
  const tracesArr = getInvocationData();

  const traceDetailObj = {};
  tracesArr.map((trace, index) => {
    traceDetailObj[`${trace.id}`] = (
      <div>
        <div>this is span details:</div>
        <div>
          {trace.serviceName} - {trace.name} - {index}
        </div>
        JSON.stringify(trace);
      </div>
    );
  });

  return traceDetailObj;
}
