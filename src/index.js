import React, { Component } from 'react'
import DetailedTraceSummary from "./DetailedTraceSummary";
import { treeCorrectedForClockSkew, detailedTraceSummary } from "./zipkin";

export default class extends Component {

	render() {
		console.log("RTC; props: ", this.props);

		// const correctedMockTraceSummary = treeCorrectedForClockSkew(rawMockTraceSummary);
		const correctedMockTraceSummary = treeCorrectedForClockSkew(this.props.traceSummary);
		console.log("ITCC; correctedMockTraceSummary: ", correctedMockTraceSummary);
		
		const mockTraceSummary = detailedTraceSummary(correctedMockTraceSummary);
		console.log("ITCC; mockTraceSummary: ", mockTraceSummary);

		return <div>
			<h2>Welcome to React trace chart components..</h2>
			<DetailedTraceSummary
				isLoading={false} // remove this
				// traceId={transactionId}
				traceId={this.props.traceId}
				traceSummary={mockTraceSummary}
				// traceSummary={this.props.traceSummary}
			/>
		</div>
	}
}
