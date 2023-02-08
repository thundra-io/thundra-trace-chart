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
        return (
            <div className="ttc-wrapper">
                <ThundraTraceChart
                    traceId="382d12cc-b846-3837-ba10-7b9f79796929"
                    traceSummary={getWorkflowJobStepData()}
                    spanDetails={getWorkflowJobStepDataDetails()}
                    showSpanDetailTitle={false}
                    showMiniTrace={false}
                    serviceNameColumnTitle="Service Name"
                    spanInfoColumnTitle="Operation Name"
                    onSpanClicked={(spanId) =>
                        console.log('span clicked; spanId: ', spanId)
                    }
                />
            </div>
        )
    }
}
