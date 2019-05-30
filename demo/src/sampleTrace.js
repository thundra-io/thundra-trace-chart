export function sampleTrace() {
    let trace = [
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '',
            id: '9400a8a9-9650-4312-9514-d4bbc1114a97',
            name: 'user-get-lambda-java-es',
            timestamp: 1557761782905000,
            duration: 281000,
            serviceName: 'AWS-Lambda',
            color: "#ff0000", // TODO: not used currently
            tags: {
                error: true
            }
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '9400a8a9-9650-4312-9514-d4bbc1114a97',
            id: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
            name: 'io.thundra.lambda.demo.service.UserService.get',
            timestamp: 1557761782907000,
            duration: 279000,
            serviceName: 'Method',
            color: "#ff0000",
            tags: {
                error: true
            }
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
            id: '540dabe5-9013-4325-9b2a-4ee2bac711e2',
            name: 'io.thundra.lambda.demo.service.UserService.validateId',
            timestamp: 1557761782908000,
            duration: 4000,
            serviceName: 'Method',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '540dabe5-9013-4325-9b2a-4ee2bac711e2',
            id: '8f645170-a590-4da6-926d-b54354c73602',
            name: 'io.thundra.lambda.demo.service.UserService.validateNotEmptyString',
            timestamp: 1557761782911000,
            duration: 1000,
            serviceName: 'Methods',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
            id: '50d6512e-3d9f-4ea6-9a96-9b4dee299407',
            name: 'io.thundra.lambda.demo.service.UserService.getFromCache',
            timestamp: 1557761782912000,
            duration: 12000,
            serviceName: 'Method',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '50d6512e-3d9f-4ea6-9a96-9b4dee299407',
            id: '276f3be1-acbb-4c43-b6a5-1a30c8dafdbc',
            name: 'io.thundra.lambda.demo.cache.CacheManager.get',
            timestamp: 1557761782912000,
            duration: 12000,
            serviceName: 'Methods',
            color: "#ff0000",
            tags: {
                error: true
            }
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '276f3be1-acbb-4c43-b6a5-1a30c8dafdbc',
            id: '8f8e20d3-ff29-4fa9-86fc-107c28d155fa',
            name: 'localhost',
            timestamp: 1557761782913000,
            duration: 1,
            serviceName: 'Redis',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
            id: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
            name: 'io.thundra.lambda.demo.repository.UserRepository.get',
            timestamp: 1557761782924000,
            duration: 261000,
            serviceName: 'Method',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
            id: '1d1b7bbc-4ca5-4563-9a0a-addc1c26e477',
            name: 'thundra_demo',
            timestamp: 1557761782925000,
            duration: 130000,
            serviceName: 'POSTGRESQL',
            color: "#ff0000"
        },
        {
            traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
            parentId: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
            id: 'd5d252ce-f0e7-4de9-af26-a7262fdb4cdb',
            name: 'thundra_demo',
            timestamp: 1557761783056000,
            duration: 129000,
            serviceName: 'POSTGRESQL',
            color: "#ff0000"
        }
    ]

    return trace;
}