import PropTypes from 'prop-types'
import React from 'react'

import TimelineHeader from './TimelineHeader'
import TimelineSpan from './TimelineSpan'
import { detailedTraceSummaryPropTypes } from '../prop-types'

const propTypes = {
    startTs: PropTypes.number.isRequired,
    endTs: PropTypes.number.isRequired,
    traceSummary: detailedTraceSummaryPropTypes.isRequired,
    showTraceChartHeader: PropTypes.bool.isRequired,
    showSpanDetail: PropTypes.bool.isRequired,
    onSpanClicked: PropTypes.func.isRequired,
}

const defaultServiceNameColumnWidth = 0.2
const defaultSpanNameColumnWidth = 0.1
const defaultNumTimeMarkers = 5

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serviceNameColumnWidth: defaultServiceNameColumnWidth,
            spanNameColumnWidth: defaultSpanNameColumnWidth,
            childrenClosedSpans: {},
            dataOpenedSpans: {},
            selectedSpanId: null,
        }
        this.handleServiceNameColumnWidthChange =
            this.handleServiceNameColumnWidthChange.bind(this)
        this.handleSpanNameColumnWidthChange =
            this.handleSpanNameColumnWidthChange.bind(this)
        this.handleChildrenOpenToggle = this.handleChildrenOpenToggle.bind(this)
        this.handleDataOpenToggle = this.handleDataOpenToggle.bind(this)

        // console.log("Timeline, constructor; props: ", this.props);
        const { spans } = this.props.traceSummary
        this.spanRefs = {}
        spans.map((span) => {
            this.spanRefs[span.spanId] = React.createRef()
        })
    }

    componentDidMount() {
        // Close all spans at fist
        const spanIds = {}
        this.props.traceSummary.spans.forEach((span) => {
            spanIds[span.spanId] = true
        })

        this.setState({
            childrenClosedSpans: spanIds,
        })

        // This is to autoselect first highlighted span if any highlights are provided.
        if (
            this.props.spanHighlights.length > 0 &&
            this.state.selectedSpanId !== this.props.spanHighlights[0]
        ) {
            this.handleDataOpenToggle(this.props.spanHighlights[0])
        }

        // This is to set initial active spans which are showing their span details.
        if (
            this.props.spanHighlights.length === 0 &&
            this.props.activeSpanIds.length > 0
        ) {
            // console.log("active>> ", this.props.activeSpanIds);
            this.setDataOpenedSpans(this.props.activeSpanIds)
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("CWRP, Timeline; props, nextProps: ", this.props, nextProps);

        // This is to update selected spans if highlighted spans array is changed.
        if (
            nextProps.spanHighlights.length > 0 &&
            JSON.stringify(nextProps.spanHighlights) !==
                JSON.stringify(this.props.spanHighlights)
        ) {
            this.handleDataOpenToggle(nextProps.spanHighlights[0])
        }

        // This is to update initial active spans if array is updated.
        if (
            nextProps.spanHighlights.length === 0 &&
            JSON.stringify(nextProps.activeSpanIds) !==
                JSON.stringify(this.props.activeSpanIds)
        ) {
            this.setDataOpenedSpans(nextProps.activeSpanIds)
        }
    }

    // This is to scroll to the first active span when the DOM is ready after state updates.
    // Scroll is triggered with updates to the state of dataOpenedSpans' states.
    // If activeSpanIds array is updated auto scoll happens but if user clicks spans manually to open details,
    // then handleDataOpenToggle called and scroll did not happen.
    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevProps.activeSpanIds) !==
            JSON.stringify(this.props.activeSpanIds)
            // && JSON.stringify(this.state.dataOpenedSpans) !== JSON.stringify(prevState.dataOpenedSpans)
            //dataOpenedSpans will become same after same spans selected again
        ) {
            // console.log("CDU, scroll");
            this.scrollToOpenedSpanDetail(this.props.activeSpanIds[0])
        }

        // If dataOpenedSpans and activeSpanIds arrays are same, then apply auto scroll to first active span.
        const dataOpenedSpansKeysArray = Object.keys(this.state.dataOpenedSpans)
        if (
            JSON.stringify(dataOpenedSpansKeysArray) ===
            JSON.stringify(this.props.activeSpanIds)
        ) {
            // console.log("SCROLL to first item on INIT; dataOpenedSpansKeysArray, state, props: ", dataOpenedSpansKeysArray, this.state, this.props);
            // Wee need to give some time after render finished to scroll properly.
            setTimeout(
                () =>
                    this.scrollToOpenedSpanDetail(this.props.activeSpanIds[0]),
                1000
            )
        }
    }

    // This method recreates dataOpenedSpans obj to set which spans to be opened.
    // If there is spanHighlights already filled, this method do not get called.
    setDataOpenedSpans = (spanIdArr) => {
        // console.log("setDataOpenedSpans; spanIdArr: ", spanIdArr);

        let dataOpenedSpans = {}
        spanIdArr.map((spanId) => {
            dataOpenedSpans = {
                ...dataOpenedSpans,
                [spanId]: true,
            }
        })

        this.setState({ dataOpenedSpans })
    }

    scrollToOpenedSpanDetail = (spanId) => {
        // console.log("scrollToOpenedSpanDetail; spanId, spanRefs: ", spanId, this.spanRefs);
        const firstSpanElement = this.spanRefs[spanId].current
        firstSpanElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        })
    }

    handleServiceNameColumnWidthChange(serviceNameColumnWidth) {
        this.setState({ serviceNameColumnWidth })
    }

    handleSpanNameColumnWidthChange(spanNameColumnWidth) {
        this.setState({ spanNameColumnWidth })
    }

    // This is to manage open/close of child spans from the left checkboxes.
    handleChildrenOpenToggle(spanId) {
        // console.log("Timeline, handleChildrenOpenToggle; props, spanId: ", spanId, this.props);

        const { childrenClosedSpans: prevChildrenClosedSpans } = this.state

        let childrenClosedSpans = {}
        if (prevChildrenClosedSpans[spanId]) {
            childrenClosedSpans = {
                ...prevChildrenClosedSpans,
                [spanId]: undefined,
            }
        } else {
            childrenClosedSpans = {
                ...prevChildrenClosedSpans,
                [spanId]: true,
            }
        }
        this.setState({ childrenClosedSpans })
    }

    handleDataOpenToggle(spanId) {
        // console.log("Timeline, handleDataOpenToggle; spanId, props: ", spanId, this.props);

        // Here we put a sign(by giving bg. color) on latest selected span, and
        // bubble up the selected spanId to the user via onSpanClicked prop.
        this.props.onSpanClicked(spanId)
        this.setState({ selectedSpanId: spanId })

        const { dataOpenedSpans: prevDataOpenedSpans } = this.state

        let dataOpenedSpans = {}
        if (prevDataOpenedSpans[spanId]) {
            dataOpenedSpans = {
                ...prevDataOpenedSpans,
                [spanId]: false,
            }
        } else {
            dataOpenedSpans = {
                ...prevDataOpenedSpans,
                [spanId]: true,
            }
        }
        this.setState({ dataOpenedSpans })
    }

    calculateChildsSpanMeasures = (span) => {
        const { spans } = this.props.traceSummary
        let measures = []
        let left

        let childSpan

        measures.push({
            left: span.left,
            width: span.width,
            isBelongToChild: false,
        })

        span.childIds.length > 0
            ? span.childIds.forEach((childId) => {
                  childSpan = spans.find((span) => span.spanId === childId)
                  measures.push({
                      left: childSpan.left,
                      width: childSpan.width,
                      isBelongToChild: true,
                  })
              })
            : measures.push({
                  left: span.left,
                  width: span.width,
                  isBelongToChild: false,
              })

        span.measures = measures
    }

    render() {
        // console.log("Timeline; props, state: ", this.props, this.state);

        const {
            startTs,
            endTs,
            traceSummary,
            showTraceChartHeader,
            spanBackgroundColor,
            spanCriticalPathColor,
            isTrueFalseMode,
            showDuration,
        } = this.props

        const {
            serviceNameColumnWidth,
            spanNameColumnWidth,
            childrenClosedSpans,
            dataOpenedSpans,
        } = this.state

        const closed = {}

        for (let i = 0; i < traceSummary.spans.length; i += 1) {
            if (childrenClosedSpans[traceSummary.spans[i].parentId]) {
                closed[traceSummary.spans[i].spanId] = true
            }
        }

        const spans = traceSummary.spans

        return (
            <div className="timeline">
                {showTraceChartHeader && (
                    <TimelineHeader
                        startTs={startTs}
                        endTs={endTs}
                        serviceNameColumnWidth={serviceNameColumnWidth}
                        spanNameColumnWidth={spanNameColumnWidth}
                        numTimeMarkers={defaultNumTimeMarkers}
                        onServiceNameColumnWidthChange={
                            this.handleServiceNameColumnWidthChange
                        }
                        onSpanNameColumnWidthChange={
                            this.handleSpanNameColumnWidthChange
                        }
                        serviceNameColumnTitle={
                            this.props.serviceNameColumnTitle
                        }
                        spanInfoColumnTitle={this.props.spanInfoColumnTitle}
                    />
                )}

                {spans.map((span, index, spans) => {
                    let hasChildren = false
                    if (index < spans.length - 1) {
                        if (spans[index + 1].depth > span.depth) {
                            hasChildren = true
                        }
                    }
                    /* Skip closed spans */
                    if (closed[span.spanId]) {
                        if (hasChildren) {
                            for (let i = 0; i < span.childIds.length; i += 1) {
                                closed[span.childIds[i]] = true
                            }
                        }
                        return null
                    }
                    this.calculateChildsSpanMeasures(span)

                    return (
                        <div
                            className="timeline-span-ref-wrapper"
                            key={span.spanId}
                            ref={this.spanRefs[span.spanId]}
                        >
                            <TimelineSpan
                                showDuration={showDuration}
                                errorCode={span.errorCode}
                                isTrueFalseMode={isTrueFalseMode}
                                startTs={startTs}
                                endTs={endTs}
                                traceDuration={traceSummary.duration}
                                traceTimestamp={spans[0].timestamp}
                                numTimeMarkers={defaultNumTimeMarkers}
                                serviceNameColumnWidth={serviceNameColumnWidth}
                                spanNameColumnWidth={spanNameColumnWidth}
                                span={span}
                                hasChildren={hasChildren}
                                areChildrenOpened={
                                    !childrenClosedSpans[span.spanId]
                                }
                                areDataOpened={!!dataOpenedSpans[span.spanId]}
                                selectedSpanId={this.state.selectedSpanId}
                                onChildrenOpenToggle={
                                    this.handleChildrenOpenToggle
                                }
                                onDataOpenToggle={this.handleDataOpenToggle}
                                spanDetail={
                                    this.props.traceDetail[`${span.spanId}`]
                                }
                                spanHighlights={this.props.spanHighlights}
                                showSpanDetail={this.props.showSpanDetail}
                                showSpanDetailTitle={
                                    this.props.showSpanDetailTitle
                                }
                                spanBackgroundColor={spanBackgroundColor}
                                spanCriticalPathColor={spanCriticalPathColor}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

Timeline.propTypes = propTypes

export default Timeline
