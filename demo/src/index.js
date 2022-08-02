import React, { Component } from 'react'
import { render } from 'react-dom'

import ThundraTraceChart from '../../src'
import ReactJson from 'react-json-view'
import { sampleTrace } from './sampleTrace'

import './main.scss'

class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            spanHighlightsArrIndex: 0,
            spanHighlightsArr: ['164ed884-fd81-36cf-9d1b-36e76883b730'],
            // spanHighlightsArr: ["da8c5131-f081-4db4-8045-88bd51ba76ae"],
            activeSpanIndex: 0,
            activeSpanIdsArr: ['164ed884-fd81-36cf-9d1b-36e76883b730'],
            // activeSpanIdsArr: ["da8c5131-f081-4db4-8045-88bd51ba76ae"],
        }
    }

    sampleTraceDetail = () => {
        const tracesArr = sampleTrace()

        const traceDetailObj = {}
        tracesArr.map((trace, index) => {
            // TODO: remove
            // if (index % 2 === 0) {
            // 	return null;
            // }

            // traceDetailObj[`${trace.id}`] = trace;
            traceDetailObj[`${trace.id}`] = (
                <div>
                    <div>this is span details:</div>
                    <div>
                        {trace.serviceName} - {trace.name}
                    </div>

                    <ReactJson src={trace} />
                </div>
            )
        })

        return traceDetailObj
    }

    sampleTraceHighlights = (index) => {
        const tracesArr = sampleTrace()

        if (index >= tracesArr.length - 1) {
            this.setState({
                spanHighlightsArr: [tracesArr[0].id, tracesArr[1].id],
                spanHighlightsArrIndex: 0,
            })
            return
        }

        this.setState({
            spanHighlightsArr: [tracesArr[index].id, tracesArr[index + 1].id],
            spanHighlightsArrIndex: index,
        })
    }

    sampleActiveSpanIds = (index) => {
        console.log('sampleActiveSpanIds; index: ', index, this.state)

        const tracesArr = sampleTrace()

        if (index >= tracesArr.length) {
            this.setState({
                activeSpanIdsArr: [tracesArr[0].id],
                activeSpanIndex: 0,
            })
            return
        }

        this.setState({
            activeSpanIdsArr: [tracesArr[index].id],
            activeSpanIndex: index,
        })
    }

    render() {
        return (
            <div className="demo-wrapper">
                <div className="top-part">
                    <h1>thundra-trace-chart Demos</h1>

                    <button
                        onClick={() => {
                            this.sampleTraceHighlights(
                                this.state.spanHighlightsArrIndex + 1
                            )
                        }}
                    >
                        toggle span highlights
                    </button>

                    <button
                        onClick={() => {
                            this.sampleActiveSpanIds(
                                this.state.activeSpanIndex + 1
                            )
                        }}
                    >
                        next span
                    </button>
                </div>

                {/* <button onClick={() => {
					const spanId = "9400a8a9-9650-4312-9514-d4bbc1114a97";
					const firstSpanElement = document.getElementById(spanId);
					firstSpanElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
				}}>
					scroll to first span
				</button> */}

                <div className="ttc-wrapper">
                    <ThundraTraceChart
                        traceId="382d12cc-b846-3837-ba10-7b9f79796929" // TODO: remove traceId from props
                        traceSummary={sampleTrace()}
                        spanDetails={this.sampleTraceDetail()}
                        // spanHighlights={this.state.spanHighlightsArr}
                        activeSpanIds={this.state.activeSpanIdsArr}
                        // activeSpanIds={[""]}

                        // autoScrollOnMount={true} // do we need to add a new prop like this for autoScroll?

                        // showHeader={false}
                        // showMiniTrace={false}
                        // showTraceChartHeader={false}
                        // showSpanDetail={false}
                        // showSpanDetailTitle={false}

                        serviceNameColumnTitle="Service Name"
                        spanInfoColumnTitle="Operation Name"
                        spanCriticalPathColor="#fff"
                        spanBackgroundColor="#4367FD"
                        onSpanClicked={(spanId) =>
                            console.log('span clicked; spanId: ', spanId)
                        }
                    />
                </div>
            </div>
        )
    }
}

render(<Demo />, document.querySelector('#demo'))
