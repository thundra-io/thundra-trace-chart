import PropTypes from 'prop-types';
import React, { Component } from 'react'
import DetailedTraceSummary from "./DetailedTraceSummary";
import { treeCorrectedForClockSkew, detailedTraceSummary } from "./zipkin";
import { detailedTraceSummaryPropTypes,spanTagsPropTypes } from "./DetailedTraceSummary/prop-types";

const tracePropTypes = PropTypes.shape({
	traceId: PropTypes.string.isRequired,
	parentId: PropTypes.string,
	id: PropTypes.string.isRequired,
	serviceName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired, // in microseconds
	color: PropTypes.string // optional color string for span
});

const tracesPropTypes = PropTypes.arrayOf(
	tracePropTypes,
);

const propTypes = {
	traceId: PropTypes.string.isRequired, /* From url parameter */
	traceSummary: tracesPropTypes.isRequired,
	// Optional span details to be shown below each span when clicked.
	spanDetails: PropTypes.arrayOf(
		PropTypes.element.isRequired
	),
	// If provided an array of span ids, then these ids will be highlighted
	spanHighlights: PropTypes.arrayOf(
		PropTypes.string.isRequired
	),
	showHeader: PropTypes.bool,
	showMiniTrace: PropTypes.bool,
	showTraceChartHeader: PropTypes.bool,
	showSpanDetail: PropTypes.bool,

	onSpanClicked: PropTypes.func,
};

const defaultProps = {
	traceSummary: null,
	spanDetails: [],
	spanHighlights: [],

	showHeader: true,
	showMiniTrace: true,
	showTraceChartHeader: true,
	showSpanDetail: true,
	onSpanClicked: () => null,
};
class ReactTraceChart extends Component {

	addLocalEndpointFromServiceName = (traceSummary) => {
		return traceSummary.map(trace => {
			const { serviceName, ...rawTrace } = trace;
			return {
				...rawTrace,
				localEndpoint: {
					serviceName,
					ipv4: "0.0.0.0"
				}
			};
		});
	}

	render() {
		console.log("RTC; props: ", this.props);

		const modifiedTraceSummary = this.addLocalEndpointFromServiceName(this.props.traceSummary);
		console.log("ITCC, modifiedTraceSummary: ", modifiedTraceSummary);

		const correctedMockTraceSummary = treeCorrectedForClockSkew(modifiedTraceSummary);
		console.log("ITCC; correctedMockTraceSummary: ", correctedMockTraceSummary);

		const mockTraceSummary = detailedTraceSummary(correctedMockTraceSummary);
		console.log("ITCC; mockTraceSummary: ", mockTraceSummary);


		return (
			<div>
				<DetailedTraceSummary
					traceId={this.props.traceId}
					traceSummary={mockTraceSummary}
					traceDetail={this.props.spanDetails}
					spanHighlights={this.props.spanHighlights}

					showHeader={this.props.showHeader}
					showMiniTrace={this.props.showMiniTrace}
					showTraceChartHeader={this.props.showTraceChartHeader}
					showSpanDetail={this.props.showSpanDetail}

					onSpanClicked={this.props.onSpanClicked}
				/>
			</div>
		);
	}
}

ReactTraceChart.propTypes = propTypes;
ReactTraceChart.defaultProps = defaultProps;

export default ReactTraceChart;