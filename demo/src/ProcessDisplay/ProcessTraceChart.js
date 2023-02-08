import React, { Component } from 'react'
import './ProcessTraceChart.scss'
import ThundraTraceChart from '../../../src'
import {
    getProcessSampleTraceData,
    getProcessSampleTraceDataDetails,
} from './ProcessSampleTrace'

export class JobProcessTraceChart extends Component {
    render() {
        return (
            <div className="ttc-wrapper">
                <ThundraTraceChart
                    traceId="382d12cc-b846-3837-ba10-7b9f79796929"
                    traceSummary={getProcessSampleTraceData()}
                    spanDetails={getProcessSampleTraceDataDetails()}
                    showSpanDetailTitle={false}
                    showMiniTrace={false}
                    serviceNameColumnTitle="Service Name"
                    spanInfoColumnTitle="Operation Name"
                    showDuration={false}
                    onSpanClicked={(spanId) =>
                        console.log('span clicked; spanId: ', spanId)
                    }
                />
            </div>
        )
    }
}
