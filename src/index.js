import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DetailedTraceSummary from './DetailedTraceSummary'
import { treeCorrectedForClockSkew, detailedTraceSummary } from './zipkin'

const tracePropTypes = PropTypes.shape({
    traceId: PropTypes.string.isRequired,
    parentId: PropTypes.string,
    id: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, // entitled Span Info
    timestamp: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired, // in microseconds
    tags: PropTypes.object, // optional tags, erroneous span info is carried through tags!
    color: PropTypes.string, // optional color string for span
})

const tracesPropTypes = PropTypes.arrayOf(tracePropTypes)

const propTypes = {
    traceId: PropTypes.string.isRequired /* From url parameter */,
    traceSummary: tracesPropTypes.isRequired,
    // Optional span details to be shown below each span when clicked.
    spanDetails: PropTypes.object,
    // If provided an array of span ids, then these ids will be highlighted
    spanHighlights: PropTypes.arrayOf(PropTypes.string.isRequired),
    // List of spans that are initially opened to show their details.
    activeSpanIds: PropTypes.arrayOf(PropTypes.string.isRequired),
    showHeader: PropTypes.bool,
    showMiniTrace: PropTypes.bool,
    showTraceChartHeader: PropTypes.bool,
    showSpanDetail: PropTypes.bool,
    showSpanDetailTitle: PropTypes.bool,

    serviceNameColumnTitle: PropTypes.string,
    spanInfoColumnTitle: PropTypes.string,

    onSpanClicked: PropTypes.func,
}

const defaultProps = {
    traceSummary: null,
    spanDetails: {},
    spanHighlights: [],
    activeSpanIds: [],

    showHeader: true,
    showMiniTrace: true,
    showTraceChartHeader: true,
    showSpanDetail: true,
    showSpanDetailTitle: true,

    serviceNameColumnTitle: 'Service Name',
    spanInfoColumnTitle: 'Span Info',
    isTrueFalseMode: false,

    onSpanClicked: () => null,
}
class ThundraTraceChart extends Component {
    // This is to add serviceName as a property of localEndpoint key which is needed for compatibility.
    addLocalEndpointFromServiceName = (traceSummary) => {
        return traceSummary.map((trace) => {
            const { serviceName, errorCode, color, tags, ...rawTrace } = trace
            return {
                ...rawTrace,
                localEndpoint: {
                    serviceName,
                    ipv4: '0.0.0.0',
                },
                tags: {
                    ...tags,
                    ttc_color: color,
                    errorCode,
                },
            }
        })
    }

    render() {
        // console.log("RTC; props: ", this.props);

        const modifiedTraceSummary = this.addLocalEndpointFromServiceName(
            this.props.traceSummary
        )

        // console.log("ITCC, modifiedTraceSummary: ", modifiedTraceSummary);

        const correctedMockTraceSummary =
            treeCorrectedForClockSkew(modifiedTraceSummary)
        // console.log("ITCC; correctedMockTraceSummary: ", correctedMockTraceSummary);

        const mockTraceSummary = detailedTraceSummary(correctedMockTraceSummary)
        // console.log("ITCC; mockTraceSummary: ", mockTraceSummary);

        return (
            <div>
                <DetailedTraceSummary
                    showDuration={this.props.showDuration}
                    traceId={this.props.traceId}
                    traceSummary={mockTraceSummary}
                    traceDetail={this.props.spanDetails}
                    spanHighlights={this.props.spanHighlights}
                    activeSpanIds={this.props.activeSpanIds}
                    showHeader={this.props.showHeader}
                    showMiniTrace={this.props.showMiniTrace}
                    showTraceChartHeader={this.props.showTraceChartHeader}
                    showSpanDetail={this.props.showSpanDetail}
                    showSpanDetailTitle={this.props.showSpanDetailTitle}
                    serviceNameColumnTitle={this.props.serviceNameColumnTitle}
                    spanInfoColumnTitle={this.props.spanInfoColumnTitle}
                    onSpanClicked={this.props.onSpanClicked}
                    spanBackgroundColor={this.props.spanBackgroundColor}
                    spanCriticalPathColor={this.props.spanCriticalPathColor}
                    isTrueFalseMode={this.props.isTrueFalseMode}
                />
            </div>
        )
    }
}

ThundraTraceChart.propTypes = propTypes
ThundraTraceChart.defaultProps = defaultProps

export default ThundraTraceChart
