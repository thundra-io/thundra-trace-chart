import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'
import { JobProcessTraceChart } from './ProcessDisplay/ProcessTraceChart'
import { WorkflowJobStepTraceChart } from './WorkflowJobStepDisplay/WorkflowJobStepTraceChart'

const DEMO_TYPE = {
    JOB_PROCESS: 'JobProcess',
    WORKFLOW_TIMELINE: 'WorkflowTimeline',
}

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeDemo: DEMO_TYPE.JOB_PROCESS,
        }
    }

    render() {
        const { activeDemo } = this.state

        let activeDemoJSX = ''
        if (activeDemo === DEMO_TYPE.JOB_PROCESS) {
            activeDemoJSX = <JobProcessTraceChart />
        } else if (activeDemo === DEMO_TYPE.WORKFLOW_TIMELINE) {
            activeDemoJSX = <WorkflowJobStepTraceChart />
        }

        return (
            <div className="demo-wrapper">
                <div className="top-part">
                    <h1>Thundra TraceChart Demos</h1>

                    <div className="demo-selection">
                        <button
                            className={
                                activeDemo === DEMO_TYPE.JOB_PROCESS
                                    ? 'selected'
                                    : ''
                            }
                            onClick={() =>
                                this.setState({
                                    activeDemo: DEMO_TYPE.JOB_PROCESS,
                                })
                            }
                        >
                            Process Display
                        </button>
                        <button
                            className={
                                activeDemo === DEMO_TYPE.WORKFLOW_TIMELINE
                                    ? 'selected'
                                    : ''
                            }
                            onClick={() =>
                                this.setState({
                                    activeDemo: DEMO_TYPE.WORKFLOW_TIMELINE,
                                })
                            }
                        >
                            Timeline Display
                        </button>
                    </div>
                </div>

                <div className="trace-chart-part">{activeDemoJSX}</div>
            </div>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))
