export const getErrorTypeColor = (errorType) => {
    switch (errorType) {
        case 'transient':
            return '#da8b8b'
        case 'critical':
            return '#da8b8b'
        default:
            return '#9bbdda'
    }
}

export const getServiceNameColor = (serviceName) => {
    switch (serviceName.length % 10) {
        case 0:
            return '#FD9983'
        case 1:
            return '#5AE628'
        case 2:
            return '#D56F0F'
        case 3:
            return '#EB2F71'
        case 4:
            return '#84B00C'
        case 5:
            return '#B553C2'
        case 6:
            return '#54A9FF'
        case 7:
            return '#FFAE43'
        case 8:
            return '#0EB3A1'
        default:
            return '#8865D4'
    }
}

export const getColorFromSpan = (span, isTrueFalseMode = false) => {
    if (!!!span || !!!span.tagsObj) {
        return '#0000ff'
    }

    if (isTrueFalseMode) {
        if (span.tags.find((item) => item.key === 'errorCode')?.value === 0) {
            return '#238636'
        } else {
            return '#F85149'
        }
    }

    const { ttc_color } = span.tagsObj
    if (isValidHexColor(ttc_color)) {
        return ttc_color
    } else {
        return `${getServiceNameColor(span.serviceName)}`
    }
}

const isValidHexColor = (colorStr) => {
    let isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorStr)
    if (isValid) {
        return colorStr
    }

    return undefined
}
