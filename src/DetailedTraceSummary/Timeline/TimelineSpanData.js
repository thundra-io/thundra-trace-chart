import PropTypes from 'prop-types';
import React from 'react';

import ServiceNameBadge from './ServiceNameBadge';
import { getServiceNameColor, getColorFromSpan } from '../util/color';
import { detailedSpanPropTypes } from '../prop-types';

const propTypes = {
    serviceNameColumnWidth: PropTypes.number.isRequired,
    span: detailedSpanPropTypes.isRequired,
};

// Parse string values if objects, to display better objects instead of plain strings.
const parseTagsData = (tags) => {
    let parsedTags = {};

    Object.keys(tags).forEach( tagKey => {
        try {
            const parsedTagValue = JSON.parse(tags[tagKey]);
            parsedTags[tagKey] = parsedTagValue;
        } catch(e) {
            parsedTags[tagKey] = tags[tagKey];
        }
    });

    return parsedTags;
}

// Render span details info
const renderInfo = (span, showSpanDetailTitle, spanDetail) => {
    // console.log("TSD; span: ", span, spanDetail);

    return (
        <div className="timeline-span-data__content">
            {showSpanDetailTitle &&
                <div
                    className="timeline-span-data__title"
                    style={{
                        borderColor: getColorFromSpan(span),
                    }}
                >
                    {`${span.serviceName}: ${span.spanName}`}
                </div>
            }            

            {spanDetail}

        </div>
    );
};

const SpanInfo = ({ span, serviceNameColumnWidth, showSpanDetailTitle, spanDetail}) => (
    <div className="timeline-span-data">
        <div
            className="timeline-span-data__left-container"
            style={{ width: `${serviceNameColumnWidth * 100}%` }}
        >
            <span
                className="timeline-span-data__depth-marker"
                style={{
                    left: `${span.depth * 14}px`,
                    // background: `${getServiceNameColor(span.serviceName)}`,
                    background: `${getColorFromSpan(span)}`,
                }}
            />
        </div>
        <div
            className="timeline-span-data__right-container"
            style={{
                left: `${(serviceNameColumnWidth) * 100}%`,
                width: `${(1 - serviceNameColumnWidth) * 100}%`,
            }}
        >
            {renderInfo(span, showSpanDetailTitle, spanDetail)}
        </div>
    </div>

);

SpanInfo.propTypes = propTypes;

export default SpanInfo;
