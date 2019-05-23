import PropTypes from 'prop-types';
import React from 'react';

import ServiceNameBadge from './ServiceNameBadge';
import { getServiceNameColor } from '../util/color';
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
const renderInfo = (span, spanDetail) => {
    console.log("TSD; span: ", span, spanDetail);

    return (
        <div className="timeline-span-data__content">
            <div
                className="timeline-span-data__title"
                style={{
                    borderColor: getServiceNameColor(span.serviceName),
                }}
            >
                {`${span.serviceName}: ${span.spanName}`}
            </div>
            <div className="timeline-span-data__aka-badges">
                {
                    span.serviceNames
                        ? span.serviceNames.map(serviceName => (
                            <ServiceNameBadge
                                key={serviceName}
                                serviceName={serviceName}
                                className="timeline-span-data__aka-badge"
                            />
                        ))
                        : null
                }
            </div>

            {/* <ReactJson 
                name={false} 
                displayDataTypes={false}
                src={parseTagsData(span.tagsObj)} 
            /> */}

            {spanDetail}

        </div>
    );
};

const SpanInfo = ({ span, serviceNameColumnWidth, spanDetail}) => (
    <div className="timeline-span-data">
        <div
            className="timeline-span-data__left-container"
            style={{ width: `${serviceNameColumnWidth * 100}%` }}
        >
            <span
                className="timeline-span-data__depth-marker"
                style={{
                    left: `${span.depth * 14}px`,
                    background: `${getServiceNameColor(span.serviceName)}`,
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
            {renderInfo(span, spanDetail)}
        </div>
    </div>

);

SpanInfo.propTypes = propTypes;

export default SpanInfo;