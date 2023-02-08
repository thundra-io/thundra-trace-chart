const isValidHexColor = (colorStr) => {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorStr)
}

export const getColorFromSpan = (span) => {
    const color = span?.tagsObj?.ttc_color
    return isValidHexColor(color) ? color : '#0000ff'
}

export const getMarkerColor = (span) => {
    const markerColor = span?.tagsObj.ttc_markerColor
    return markerColor ? markerColor : getColorFromSpan(span)
}

export const getCriticalPathColor = (span) => {
    const cpColor = span?.tagsObj.ttc_criticalPathColor
    return cpColor ? cpColor : getColorFromSpan(span)
}
