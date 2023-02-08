import React from 'react'
export function getProcessSampleTraceData() {
    let trace = [
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '',
            id: '164ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296525718,
            duration: 104000,
            serviceName: 'test Parent',
            markerColor: '#238636',
            color: '#4367FD',
            criticalPathColor: '#ffffff',
        },
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '164ed884-fd81-36cf-9d1b-36e76883b730',
            id: '264ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296527718,
            duration: 22000,
            serviceName: 'test Child 1',
            color: '#4367FD',
            markerColor: '#F85149',
            criticalPathColor: '#ffffff',
        },
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '264ed884-fd81-36cf-9d1b-36e76883b730',
            id: '364ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296528718,
            duration: 9100,
            serviceName: 'test Child 1.1',
            color: '#4367FD',
            markerColor: '#238636',
            criticalPathColor: '#ffffff',
        },
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '264ed884-fd81-36cf-9d1b-36e76883b730',
            id: '964ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296539718,
            duration: 5100,
            serviceName: 'test Child 1.2',
            color: '#4367FD',
            markerColor: '#F85149',
            criticalPathColor: '#ffffff',
        },
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '264ed884-fd81-36cf-9d1b-36e76883b730',
            id: '464ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296533718,
            duration: 5100,
            serviceName: 'test Child 1.3',
            color: '#4367FD',
            markerColor: '#238636',
            criticalPathColor: '#ffffff',
        },
        {
            traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
            parentId: '164ed884-fd81-36cf-9d1b-36e76883b730',
            id: '764ed884-fd81-36cf-9d1b-36e76883b730',
            name: 'git',
            timestamp: 1658296577718,
            duration: 22000,
            serviceName: 'test Child 2',
            color: '#4367FD',
            markerColor: '#238636',
            criticalPathColor: '#ffffff',
        },
    ]

    return trace
}

export function getProcessSampleTraceDataDetails() {
    const tracesArr = getProcessSampleTraceData()

    const traceDetailObj = {}
    tracesArr.map((trace, index) => {
        traceDetailObj[`${trace.id}`] = (
            <div>
                <div>this is span details:</div>
                <div>
                    {trace.serviceName} - {trace.name} - {index}
                </div>
                {JSON.stringify(trace)}
            </div>
        )
    })

    return traceDetailObj
}
