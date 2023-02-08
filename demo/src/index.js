import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'
import { ProcessTraceChart } from './ProcessDisplay/ProcessTraceChart'

const DEMO_TYPE = {
    PROCESS: 'Process',
}

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeDemo: DEMO_TYPE.PROCESS,
        }
    }

    render() {
        const { activeDemo } = this.state

        let activeDemoJSX = ''
        if (activeDemo === DEMO_TYPE.PROCESS) {
            activeDemoJSX = <ProcessTraceChart />
        }

        return (
            <div className="demo-wrapper">
                <div className="top-part">
                    <h1>Thundra TraceChart Demos</h1>

                    <div className="demo-selection">
                        <button>Process Display</button>
                    </div>
                </div>

                <div className="trace-chart-part">{activeDemoJSX}</div>
            </div>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))
