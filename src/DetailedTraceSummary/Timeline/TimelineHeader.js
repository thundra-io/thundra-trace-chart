import PropTypes from 'prop-types'
import React from 'react'

import { formatDuration } from '../util/timestamp'

const propTypes = {
    startTs: PropTypes.number.isRequired,
    endTs: PropTypes.number.isRequired,
    serviceNameColumnWidth: PropTypes.number.isRequired,
    spanNameColumnWidth: PropTypes.number.isRequired,
    numTimeMarkers: PropTypes.number.isRequired,
    onSpanNameColumnWidthChange: PropTypes.func.isRequired,
    onServiceNameColumnWidthChange: PropTypes.func.isRequired,
}

const leftMouseButton = 0
const minServiceNameColumnWidth = 0.1
const minSpanNameColumnWidth = 0.075
const serviceNameColumn = 'SERVICE_NAME_COLUMN'
const spanNameColumn = 'SPAN_NAME_COLUMN'

class TimelineHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { resizingColumnName: null }
        this.element = undefined
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
    }

    getPosition(clientX) {
        const { left, width } = this.element.getBoundingClientRect()
        return (clientX - left) / width
    }

    handleMouseDown(event, columnName) {
        if (event.button !== leftMouseButton) {
            return
        }
        this.setState({ resizingColumnName: columnName })
        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseMove(event) {
        const {
            serviceNameColumnWidth,
            onServiceNameColumnWidthChange,
            onSpanNameColumnWidthChange,
        } = this.props
        const { resizingColumnName } = this.state

        if (resizingColumnName === serviceNameColumn) {
            onServiceNameColumnWidthChange(
                Math.max(
                    this.getPosition(event.clientX),
                    minServiceNameColumnWidth
                )
            )
        } else if (resizingColumnName === spanNameColumn) {
            onSpanNameColumnWidthChange(
                Math.max(
                    this.getPosition(event.clientX) - serviceNameColumnWidth,
                    minSpanNameColumnWidth
                )
            )
        }
    }

    handleMouseUp() {
        window.removeEventListener('mousemove', this.handleMouseMove)
        window.removeEventListener('mouseup', this.handleMouseUp)
    }

    renderResizableColumn(columnName) {
        const {
            serviceNameColumnWidth,
            spanNameColumnWidth,
            showSpanDetailTitle,
        } = this.props
        let label = ''
        let columnWidth = 0
        if (columnName === serviceNameColumn) {
            // Service Name;
            label = this.props.serviceNameColumnTitle
            columnWidth = serviceNameColumnWidth
        } else if (columnName === spanNameColumn && showSpanDetailTitle) {
            // Span Info;
            label = this.props.spanInfoColumnTitle
            columnWidth = spanNameColumnWidth
        }

        return (
            <div
                className="timeline-header__resizable-column"
                style={{ width: `${columnWidth * 100}%` }}
            >
                <div className="timeline-header__column-name">{label}</div>
                <div
                    className="timeline-header__draggable-splitter"
                    role="presentation"
                    onMouseDown={(e) => {
                        this.handleMouseDown(e, columnName)
                    }}
                >
                    ||
                </div>
            </div>
        )
    }

    renderTimeMarkers() {
        const {
            startTs,
            endTs,
            numTimeMarkers,
            serviceNameColumnWidth,
            spanNameColumnWidth,
            showSpanDetailTitle,
        } = this.props

        const timeMarkers = []
        for (let i = 0; i < numTimeMarkers; i += 1) {
            const label =
                startTs + (i / (numTimeMarkers - 1)) * (endTs - startTs)
            const portion = i / (numTimeMarkers - 1)

            let modifier = ''
            if (portion <= 0) {
                modifier = '--first'
            } else if (portion >= 1) {
                modifier = 'last'
            }

            timeMarkers.push(
                <div
                    key={portion}
                    className={`timeline-header__time-marker timeline-header__time-marker${modifier}`}
                    style={{ left: `${portion * 100}%` }}
                >
                    <span
                        className={`timeline-header__time-marker-label timeline-header__time-marker-label${modifier}`}
                    >
                        {formatDuration(label)}
                    </span>
                </div>
            )
        }
        return (
            <div
                className="timeline-header__time-markers"
                style={{
                    width: `${
                        (1 -
                            (serviceNameColumnWidth +
                                (showSpanDetailTitle
                                    ? spanNameColumnWidth
                                    : 0))) *
                        100
                    }%`,
                }}
            >
                {timeMarkers}
            </div>
        )
    }

    render() {
        const { showSpanDetailTitle } = this.props
        return (
            <div
                className="timeline-header"
                ref={(element) => {
                    this.element = element
                }}
            >
                {this.renderResizableColumn(serviceNameColumn)}
                {showSpanDetailTitle &&
                    this.renderResizableColumn(spanNameColumn)}
                {this.renderTimeMarkers()}
            </div>
        )
    }
}

TimelineHeader.propTypes = propTypes

export default TimelineHeader
