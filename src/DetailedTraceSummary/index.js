import PropTypes from 'prop-types'
import React from 'react'

import Timeline from './Timeline'
import MiniTraceViewer from './MiniTraceViewer'

import { detailedTraceSummaryPropTypes } from './prop-types'
import '../scss/main.scss'

const propTypes = {
    traceId: PropTypes.string.isRequired /* From url parameter */,
    traceSummary: detailedTraceSummaryPropTypes.isRequired,
    traceDetail: PropTypes.object.isRequired,
    spanHighlights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    activeSpanIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

    showHeader: PropTypes.bool.isRequired,
    showMiniTrace: PropTypes.bool.isRequired,
    showTraceChartHeader: PropTypes.bool.isRequired,
    showSpanDetail: PropTypes.bool.isRequired,

    onSpanClicked: PropTypes.func.isRequired,
}

// is this needed.
const defaultProps = {
    traceSummary: null,
}

class DetailedTraceSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startTs: null,
            endTs: null,
        }
        this.handleStartAndEndTsChange =
            this.handleStartAndEndTsChange.bind(this)
    }

    handleStartAndEndTsChange(startTs, endTs) {
        this.setState({ startTs, endTs })
    }

    renderHeader() {
        const { traceId, traceSummary } = this.props
        const { durationStr, serviceNameAndSpanCounts, spans, depth } =
            traceSummary

        return (
            <div className="detailed-trace-summary__header">
                <div className="detailed-trace-summary__trace-id">
                    {traceId}
                </div>
                <div className="detailed-trace-summary__trace-data-list">
                    {[
                        { label: 'Duration', value: durationStr },
                        {
                            label: 'Services',
                            value: serviceNameAndSpanCounts.length,
                        },
                        { label: 'Depth', value: depth },
                        { label: 'Total Spans', value: spans.length },
                    ].map((elem) => (
                        <div
                            key={elem.label}
                            className="detailed-trace-summary__data-wrapper"
                        >
                            <div className="detailed-trace-summary__data-label">
                                {elem.label}
                            </div>
                            <div className="detailed-trace-summary__data-value">
                                {elem.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    render() {
        const { startTs, endTs } = this.state
        const {
            traceId,
            traceSummary,
            traceDetail,
            showHeader,
            showMiniTrace,
            showTraceChartHeader,
            showSpanDetail,
            showSpanDetailTitle,
            spanHighlights,
            activeSpanIds,
            spanCriticalPathColor,
            spanBackgroundColor,
            isTrueFalseMode,
            showDuration,
        } = this.props

        // console.log("DTS; props: ", this.props);

        return (
            <div>
                <div className="detailed-trace-summary">
                    {!traceSummary ||
                    traceSummary.traceId !== traceId ? null : (
                        <div>
                            {showHeader && this.renderHeader()}

                            {showMiniTrace && (
                                <div className="detailed-trace-summary__mini-trace-viewer-wrapper">
                                    <MiniTraceViewer
                                        startTs={startTs || 0}
                                        endTs={endTs || traceSummary.duration}
                                        traceSummary={traceSummary}
                                        onStartAndEndTsChange={
                                            this.handleStartAndEndTsChange
                                        }
                                    />
                                </div>
                            )}

                            <div className="detailed-trace-summary__timeline-wrapper">
                                <Timeline
                                    showDuration={showDuration}
                                    startTs={startTs || 0}
                                    endTs={endTs || traceSummary.duration}
                                    traceSummary={traceSummary}
                                    traceDetail={traceDetail}
                                    spanHighlights={spanHighlights}
                                    activeSpanIds={activeSpanIds}
                                    showTraceChartHeader={showTraceChartHeader}
                                    showSpanDetail={showSpanDetail}
                                    showSpanDetailTitle={showSpanDetailTitle}
                                    serviceNameColumnTitle={
                                        this.props.serviceNameColumnTitle
                                    }
                                    spanInfoColumnTitle={
                                        this.props.spanInfoColumnTitle
                                    }
                                    onSpanClicked={this.props.onSpanClicked}
                                    spanBackgroundColor={spanBackgroundColor}
                                    spanCriticalPathColor={
                                        spanCriticalPathColor
                                    }
                                    isTrueFalseMode={isTrueFalseMode}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

DetailedTraceSummary.propTypes = propTypes
DetailedTraceSummary.defaultProps = defaultProps

export default DetailedTraceSummary
