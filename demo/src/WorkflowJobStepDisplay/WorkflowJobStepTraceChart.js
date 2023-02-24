import React, { Component } from 'react';
import './WorkflowJobStepTraceChart.scss';
import ThundraTraceChart from '../../../src';
import {} from './WorkflowJobStepTraceChart';
import { getWorkflowJobStepData2, getWorkflowJobStepDataDetails2 } from './WorkflowJobStepSampleTrace2';

export class WorkflowJobStepTraceChart extends Component {
  render() {
    const spans = getWorkflowJobStepData2();
    const spanDetails = getWorkflowJobStepDataDetails2();

    return (
      <div className="ttc-wrapper">
        <ThundraTraceChart
          activeSpanIds={[spans[0].id]}
          traceId={spans[0].traceId}
          traceSummary={spans}
          spanDetails={spanDetails}
          showSpanDetail={false}
          showMiniTrace={false}
          serviceNameColumnTitle="Service Name"
          spanInfoColumnTitle="Duration"
          showSpanDetailTitle={true}
          showDuration={false}
          onSpanClicked={spanId => console.log('span clicked; spanId: ', spanId)}
        />
      </div>
    );
  }
}
