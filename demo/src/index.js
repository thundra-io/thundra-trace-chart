import React, { Component } from 'react';
import { render } from 'react-dom';

import ThundraTraceChart from '../../src';
import ReactJson from 'react-json-view';
import {sampleTrace} from "./sampleTrace";

class Demo extends Component {

	sampleTraceDetail = () => {
		const tracesArr = sampleTrace();

		const traceDetailObj = {}
		tracesArr.map( (trace, index) => {

			// TODO: remove
			// if (index % 2 === 0) {
			// 	return null;
			// }


			// traceDetailObj[`${trace.id}`] = trace;
			traceDetailObj[`${trace.id}`] = (
				<div>
					<div>this is span details:</div>
					<div>{trace.serviceName} - {trace.name}</div>

					<ReactJson 
						src={trace}
					/>
				</div>
			);
		});

		return traceDetailObj;
	}

	sampleTraceHighlights = () => {
		const tracesArr = sampleTrace();

		return [tracesArr[3].id, tracesArr[4].id];
	}

	render() {
		return (
			<div>
				<h1>thundra-trace-chart Demos</h1>

				<ThundraTraceChart
					traceId="4e81414c-2bff-439f-9e5c-9e6699b4e24b" // TODO: remove traceId from props
					traceSummary={sampleTrace()}
					spanDetails={this.sampleTraceDetail()}
					// spanHighlights={this.sampleTraceHighlights()}


					// showHeader={false}
					// showMiniTrace={false}
					// showTraceChartHeader={false}
					// showSpanDetail={false}

					serviceNameColumnTitle="Service Name"
					spanInfoColumnTitle="Operation Name"

					// onSpanClicked={(spanId) => console.log("span clicked; spanId: ", spanId)}
				/>
			</div>
		);
	}
}

render(<Demo />, document.querySelector('#demo'))
