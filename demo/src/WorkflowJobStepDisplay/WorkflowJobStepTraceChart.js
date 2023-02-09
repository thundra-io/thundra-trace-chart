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
