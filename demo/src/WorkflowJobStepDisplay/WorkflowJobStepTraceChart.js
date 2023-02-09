import React, { Component } from 'react'
import './WorkflowJobStepTraceChart.scss'
import ThundraTraceChart from '../../../src'
import {} from './WorkflowJobStepTraceChart'
import {
    getWorkflowJobStepData,
    getWorkflowJobStepDataDetails,
} from './WorkflowJobStepSampleTrace'

export class WorkflowJobStepTraceChart extends Component {
    render() {
        const spans = getWorkflowJobStepData()
        const spanDetails = getWorkflowJobStepDataDetails()

        return (
            <div className="ttc-wrapper">
                <ThundraTraceChart
                    traceId={spans[0].traceId}
                    traceSummary={spans}
                    spanDetails={spanDetails}
                    showSpanDetail={false}
                    showMiniTrace={false}
                    serviceNameColumnTitle="Service Name"
                    spanInfoColumnTitle="Duration"
                    showSpanDetailTitle={true}
                    showDuration={false}
                    onSpanClicked={(spanId) =>
                        console.log('span clicked; spanId: ', spanId)
                    }
                />
            </div>
        )
    }
}
