import React, { Component } from 'react';
import './InvocationTraceChart.scss';
import ThundraTraceChart from '../../../src';
import { getInvocationData, getInvocationDataDetails } from './InvocationSampleTrace';

export class InvocationTraceChart extends Component {
  render() {
    const spans = getInvocationData();
    const spanDetails = getInvocationDataDetails();

    return (
      <div className="ttc-wrapper">
        <ThundraTraceChart
          activeSpanIds={[spans[0].id]}
          traceId={spans[0].traceId}
          traceSummary={spans}
          spanDetails={spanDetails}
          showSpanDetail={true}
          showMiniTrace={false}
          serviceNameColumnTitle="Service Name"
          spanInfoColumnTitle="Operation Name"
          showSpanDetailTitle={true}
          showDuration={true}
          onSpanClicked={spanId => console.log('span clicked; spanId: ', spanId)}
        />
      </div>
    );
  }
}
