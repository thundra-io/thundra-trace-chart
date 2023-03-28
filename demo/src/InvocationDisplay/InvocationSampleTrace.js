import React from 'react';
import { convertAPMSpansToThundraTraceChartSpans } from './Adapter/TraceChartAdapter';
import { invocationSample1 } from './APMData/InvocationSample1';
//import { invocationSample1 } from './APMData/InvocationSample1';

export function getInvocationData() {
  return convertAPMSpansToThundraTraceChartSpans(invocationSample1);
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
