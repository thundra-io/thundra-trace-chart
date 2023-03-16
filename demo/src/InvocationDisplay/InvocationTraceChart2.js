import React, { Component } from 'react';
import './InvocationTraceChart.scss';
import ThundraTraceChart from '../../../src';
import { getInvocationData, getInvocationDataDetails } from './InvocationSampleTrace';

export class InvocationTraceChartFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSpanId: 0,
    };
  }

  nextActivate = () => {
    const { activeSpanId } = this.state;
    const spans = getInvocationData();
    const nextActiveSpanId = (activeSpanId + 1) % spans.length;
    this.setState({
      activeSpanId: nextActiveSpanId,
    });
  };

  render() {
    const { activeSpanId, activeHighlightId } = this.state;
    const spans = getInvocationData();
    const spanDetails = getInvocationDataDetails();

    return (
      <div className="ttc-wrapper">
        <button
          onClick={() => {
            this.nextActivate();
          }}
        >
          Next Activate (activeSpanId: {activeSpanId})
        </button>

        <ThundraTraceChart
          activeSpanIds={[spans[activeSpanId].id]}
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
          disabledCriticalPath={true}
          showHeader={false}
        />
      </div>
    );
  }
}
