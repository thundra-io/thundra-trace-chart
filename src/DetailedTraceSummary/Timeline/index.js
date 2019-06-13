import PropTypes from 'prop-types';
import React from 'react';

import TimelineHeader from './TimelineHeader';
import TimelineSpan from './TimelineSpan';
import { detailedTraceSummaryPropTypes } from '../prop-types';

const propTypes = {
	startTs: PropTypes.number.isRequired,
	endTs: PropTypes.number.isRequired,
	traceSummary: detailedTraceSummaryPropTypes.isRequired,
	showTraceChartHeader: PropTypes.bool.isRequired,
	showSpanDetail: PropTypes.bool.isRequired,
	onSpanClicked: PropTypes.func.isRequired
};

const defaultServiceNameColumnWidth = 0.2;
const defaultSpanNameColumnWidth = 0.1;
const defaultNumTimeMarkers = 5;

class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceNameColumnWidth: defaultServiceNameColumnWidth,
			spanNameColumnWidth: defaultSpanNameColumnWidth,
			childrenClosedSpans: {},
			dataOpenedSpans: {},
			selectedSpanId: null
		};
		this.handleServiceNameColumnWidthChange = this.handleServiceNameColumnWidthChange.bind(this);
		this.handleSpanNameColumnWidthChange = this.handleSpanNameColumnWidthChange.bind(this);
		this.handleChildrenOpenToggle = this.handleChildrenOpenToggle.bind(this);
		this.handleDataOpenToggle = this.handleDataOpenToggle.bind(this);
	}

	// This is to autoselect first highlighted span if any highlights are provided.
	componentDidMount() {
		if (this.props.spanHighlights.length > 0 && this.state.selectedSpanId !== this.props.spanHighlights[0]) {
			this.handleDataOpenToggle(this.props.spanHighlights[0]);
		}
	}

	// This is to update selected spans if highlighted spans array is changed.
	componentWillReceiveProps(nextProps) {
		if (nextProps.spanHighlights.length > 0 && 
			JSON.stringify(nextProps.spanHighlights) !== JSON.stringify(this.props.spanHighlights)
		) {
			this.handleDataOpenToggle(nextProps.spanHighlights[0]);
		}
	}

	handleServiceNameColumnWidthChange(serviceNameColumnWidth) {
		this.setState({ serviceNameColumnWidth });
	}

	handleSpanNameColumnWidthChange(spanNameColumnWidth) {
		this.setState({ spanNameColumnWidth });
	}

	handleChildrenOpenToggle(spanId) {
		// console.log("Timeline, handleChildrenOpenToggle; props, spanId: ", spanId, this.props);

		const { childrenClosedSpans: prevChildrenClosedSpans } = this.state;

		let childrenClosedSpans = {};
		if (prevChildrenClosedSpans[spanId]) {
			childrenClosedSpans = {
				...prevChildrenClosedSpans,
				[spanId]: undefined,
			};
		} else {
			childrenClosedSpans = {
				...prevChildrenClosedSpans,
				[spanId]: true,
			};
		}
		this.setState({ childrenClosedSpans });
	}

	handleDataOpenToggle(spanId) {
		// console.log("Timeline, handleDataOpenToggle; spanId, props: ", spanId, this.props);

		// Here we put a sign(by giving bg. color) on latest selected span, and 
		// bubble up the selected spanId to the user via onSpanClicked prop.
		this.props.onSpanClicked(spanId);
		this.setState({selectedSpanId: spanId});

		const { dataOpenedSpans: prevDataOpenedSpans } = this.state;

		let dataOpenedSpans = {};
		if (prevDataOpenedSpans[spanId]) {
			dataOpenedSpans = {
				...prevDataOpenedSpans,
				[spanId]: false,
			};
		} else {
			dataOpenedSpans = {
				...prevDataOpenedSpans,
				[spanId]: true,
			};
		}
		this.setState({ dataOpenedSpans });
	}

	render() {
		// console.log("Timeline; props, state: ", this.props, this.state);

		const { 
			startTs, endTs, traceSummary,
			showTraceChartHeader
		} = this.props;

		const {
			serviceNameColumnWidth,
			spanNameColumnWidth,
			childrenClosedSpans,
			dataOpenedSpans,
		} = this.state;

		const closed = {};
		
		for (let i = 0; i < traceSummary.spans.length; i += 1) {
			if (childrenClosedSpans[traceSummary.spans[i].parentId]) {
				closed[traceSummary.spans[i].spanId] = true;
			}
		}

		return (
			<div className="timeline">
				{showTraceChartHeader &&
					<TimelineHeader
						startTs={startTs}
						endTs={endTs}
						serviceNameColumnWidth={serviceNameColumnWidth}
						spanNameColumnWidth={spanNameColumnWidth}
						numTimeMarkers={defaultNumTimeMarkers}
						onServiceNameColumnWidthChange={this.handleServiceNameColumnWidthChange}
						onSpanNameColumnWidthChange={this.handleSpanNameColumnWidthChange}
						
						serviceNameColumnTitle={this.props.serviceNameColumnTitle}
						spanInfoColumnTitle={this.props.spanInfoColumnTitle}
					/>
				}

				{
					traceSummary.spans.map(
						(span, index, spans) => {
							let hasChildren = false;
							if (index < spans.length - 1) {
								if (spans[index + 1].depth > span.depth) {
									hasChildren = true;
								}
							}
							/* Skip closed spans */
							if (closed[span.spanId]) {
								if (hasChildren) {
									for (let i = 0; i < span.childIds.length; i += 1) {
										closed[span.childIds[i]] = true;
									}
								}
								return null;
							}

							return (
								<TimelineSpan
									key={span.spanId}
									startTs={startTs}
									endTs={endTs}
									traceDuration={traceSummary.duration}
									traceTimestamp={traceSummary.spans[0].timestamp}
									numTimeMarkers={defaultNumTimeMarkers}
									serviceNameColumnWidth={serviceNameColumnWidth}
									spanNameColumnWidth={spanNameColumnWidth}
									span={span}
									hasChildren={hasChildren}
									areChildrenOpened={!childrenClosedSpans[span.spanId]}
									areDataOpened={!!dataOpenedSpans[span.spanId]}
									selectedSpanId={this.state.selectedSpanId}
									onChildrenOpenToggle={this.handleChildrenOpenToggle}
									onDataOpenToggle={this.handleDataOpenToggle}
									// TODO: instead of index, access traceDetail via span.spanId?
									// traceDetail={this.props.traceDetail[index]}
									traceDetail={this.props.traceDetail[`${span.spanId}`]}
									spanHighlights={this.props.spanHighlights}
									showSpanDetail={this.props.showSpanDetail}
								/>
							);
						},
					)
				}
			</div>
		);
	}
}

Timeline.propTypes = propTypes;

export default Timeline;
