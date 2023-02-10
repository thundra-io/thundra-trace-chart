const trace = [
    {
        id: '19af2fac-9cd6-4be2-babd-f7a8e82a52ed',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: 'API',
        className: 'AWS-Lambda',
        operationName: 'team-list-lambda-java-prod',
        startTimestamp: 1676065030689,
        finishTimestamp: 1676065030699,
        duration: 10,
        tags: {
            'aws.lambda.invocation.coldstart': false,
            'trigger.className': 'AWS-APIGateway',
            'aws.lambda.invocation.request': {
                callerId: '28fa392d-ddca-4ccd-a6e5-dcca3e0edf1b',
            },
            'trigger.operationNames': ['team'],
            'aws.lambda.log_stream_name':
                '2023/02/10/[$LATEST]cfc5429082a04014a1c7fbe8e7ab9b62',
            'aws.lambda.invocation.response': {
                teams: [
                    {
                        creationTime: 1676064134848,
                        name: 'Team-1095115612',
                        id: '2',
                    },
                    {
                        creationTime: 1676060221643,
                        name: 'Team-130931456',
                        id: '8',
                    },
                    {
                        creationTime: 1676062619655,
                        name: 'Team-1414166512',
                        id: '1',
                    },
                    {
                        creationTime: 1676061719734,
                        name: 'Team-1347137497',
                        id: '6',
                    },
                    {
                        creationTime: 1676060557809,
                        name: 'Team-2082143188',
                        id: '0',
                    },
                    {
                        creationTime: 1676062615990,
                        name: 'Team-1406585840',
                        id: '5',
                    },
                    {
                        creationTime: 1676064734766,
                        name: 'Team-86566375',
                        id: '4',
                    },
                    {
                        creationTime: 1676061134100,
                        name: 'Team-281025703',
                        id: '3',
                    },
                ],
            },
            'trigger.domainName': 'API',
            'aws.lambda.memory_limit': 768,
            'aws.lambda.invocation.request_id':
                'adc0cc28-b354-474e-8ef2-245d73aab601',
            'aws.lambda.arn':
                'arn:aws:lambda:eu-west-1:775715653624:function:team-list-lambda-java-prod',
            'aws.region': 'eu-west-1',
            'aws.lambda.log_group_name':
                '/aws/lambda/team-list-lambda-java-prod',
            'aws.lambda.invocation.timeout': false,
            'aws.lambda.name': 'team-list-lambda-java-prod',
        },
    },
    {
        id: '2310e344-ceb0-47e5-b6fd-d7d8559c97b2',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: '19af2fac-9cd6-4be2-babd-f7a8e82a52ed',
        operationName:
            'io.thundra.lambda.demo.handler.team.TeamListHandler.handleRequest',
        startTimestamp: 1676065030689,
        finishTimestamp: 1676065030699,
        duration: 10,
        tags: {
            'method.return_value': {
                type: 'io.thundra.lambda.demo.handler.team.TeamListHandler$TeamListResponse',
                value: { teams: [{}, {}, {}, {}, {}, {}, {}, {}] },
            },
            'method.args': [
                {
                    name: 'request',
                    type: 'io.thundra.lambda.demo.handler.team.TeamListHandler$TeamListRequest',
                    value: { callerId: '28fa392d-ddca-4ccd-a6e5-dcca3e0edf1b' },
                },
                {
                    name: 'context',
                    type: 'io.thundra.agent.lambda.core.handler.LambdaContext',
                    value: {
                        handler:
                            'io.thundra.agent.lambda.core.handler.ThundraLambdaHandler$ProxyLambdaRequestHandler@57cf54e1',
                        request: {
                            callerId: '28fa392d-ddca-4ccd-a6e5-dcca3e0edf1b',
                        },
                        requestStartTimestamp: 1676065030689,
                        requestFinishTimestamp: 0,
                        threadLocalTempProps: {
                            threadLocalHashCode: -78085091,
                        },
                        tempProps: {
                            'RestGlobalCompositeMonitoringDataReporter@be2763f9-d91a-4354-969b-35f8bba90f57': true,
                        },
                        logger: {},
                        context: {
                            clientContext: {},
                            logGroupName:
                                '/aws/lambda/team-list-lambda-java-prod',
                            functionVersion: '$LATEST',
                            functionName: 'team-list-lambda-java-prod',
                            awsRequestId:
                                'adc0cc28-b354-474e-8ef2-245d73aab601',
                            logStreamName:
                                '2023/02/10/[$LATEST]cfc5429082a04014a1c7fbe8e7ab9b62',
                            invokedFunctionArn:
                                'arn:aws:lambda:eu-west-1:775715653624:function:team-list-lambda-java-prod',
                            memoryLimit: 768,
                            cognitoIdentity: {},
                        },
                        requestSize: 56,
                        invocationId: '2b95b473-1257-4ab3-ae7c-d892dc68599f',
                        preWarmedUp: false,
                        preInitialized: false,
                    },
                },
            ],
        },
    },
    {
        id: 'f61b3284-33f1-4c8b-ac3f-0e50c6047fd2',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: '2310e344-ceb0-47e5-b6fd-d7d8559c97b2',
        operationName:
            'io.thundra.lambda.demo.handler.team.TeamListHandler$TeamListRequest.toString',
        startTimestamp: 1676065030689,
        finishTimestamp: 1676065030689,
        duration: 0,
        tags: {
            'method.return_value': {
                type: 'java.lang.String',
                value: "TeamListRequest{callerId='28fa392d-ddca-4ccd-a6e5-dcca3e0edf1b'}",
            },
            'method.args': [],
        },
    },
    {
        id: '0343cb31-c8bc-4e3f-a100-e92a9a71f39b',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: '2310e344-ceb0-47e5-b6fd-d7d8559c97b2',
        operationName:
            'io.thundra.lambda.demo.handler.team.TeamListHandler$TeamListRequest.getCallerId',
        startTimestamp: 1676065030690,
        finishTimestamp: 1676065030690,
        duration: 0,
        tags: {
            'method.return_value': {
                type: 'java.lang.String',
                value: '28fa392d-ddca-4ccd-a6e5-dcca3e0edf1b',
            },
            'method.args': [],
        },
    },
    {
        id: 'c9f9c4ff-3f5b-4f22-85da-4ec99f711ea6',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: '2310e344-ceb0-47e5-b6fd-d7d8559c97b2',
        operationName: 'io.thundra.lambda.demo.service.TeamService.list',
        startTimestamp: 1676065030690,
        finishTimestamp: 1676065030699,
        duration: 9,
        tags: {
            'method.lines': [
                { duration: 0, line: 263, localVars: [] },
                {
                    duration: 0,
                    line: 265,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 267,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                    ],
                },
                {
                    duration: 8,
                    nextSpanIds: ['805b6ff3-4e54-49d5-9049-69cbfb00a9ed'],
                    line: 269,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 271,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 273,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 275,
                    localVars: [
                        {
                            name: 'operationTypeTagValue',
                            type: 'java.lang.String',
                            value: 'team.list',
                        },
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                    ],
                },
            ],
            'method.return_value': {
                type: 'java.util.ArrayList',
                value: [
                    {
                        creationTime: 1676064134848,
                        name: 'Team-1095115612',
                        id: '2',
                    },
                    {
                        creationTime: 1676060221643,
                        name: 'Team-130931456',
                        id: '8',
                    },
                    {
                        creationTime: 1676062619655,
                        name: 'Team-1414166512',
                        id: '1',
                    },
                    {
                        creationTime: 1676061719734,
                        name: 'Team-1347137497',
                        id: '6',
                    },
                    {
                        creationTime: 1676060557809,
                        name: 'Team-2082143188',
                        id: '0',
                    },
                    {
                        creationTime: 1676062615990,
                        name: 'Team-1406585840',
                        id: '5',
                    },
                    {
                        creationTime: 1676064734766,
                        name: 'Team-86566375',
                        id: '4',
                    },
                    {
                        creationTime: 1676061134100,
                        name: 'Team-281025703',
                        id: '3',
                    },
                ],
            },
            'method.args': [],
            'method.startLine': 261,
            'method.source':
                '    public Collection<Team> list() {\n        try {\n            String operationTypeTagValue = "team.list";\n\n            InvocationSupport.setTag("operation.type", operationTypeTagValue);\n\n            logger.info(String.format("Teams will be listed"));\n\n            Collection<Team> teams = teamRepository.list();\n\n            logger.info(String.format("Teams has been listed: %s", teams));\n\n            InvocationSupport.setTag("operation.success", !teams.isEmpty());\n\n            return teams;\n        } catch (Throwable t) {\n            InvocationSupport.setTag("operation.success", false);\n            ExceptionUtils.sneakyThrow(t);\n            return null;\n        }\n    }\n',
        },
    },
    {
        id: '805b6ff3-4e54-49d5-9049-69cbfb00a9ed',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: 'c9f9c4ff-3f5b-4f22-85da-4ec99f711ea6',
        operationName: 'io.thundra.lambda.demo.repository.TeamRepository.list',
        startTimestamp: 1676065030690,
        finishTimestamp: 1676065030698,
        duration: 8,
        tags: {
            'method.lines': [
                { duration: 0, line: 89, localVars: [] },
                { duration: 0, line: 91, localVars: [] },
                {
                    duration: 8,
                    nextSpanIds: ['9f624875-7536-4f2e-a545-12693dd212c3'],
                    line: 92,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [],
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 94,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676064134848' },
                                name: { s: 'Team-1095115612' },
                                id: { s: '2' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676064134848' },
                                name: { s: 'Team-1095115612' },
                                id: { s: '2' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676064134848,
                                name: 'Team-1095115612',
                                id: '2',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676060221643' },
                                name: { s: 'Team-130931456' },
                                id: { s: '8' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676060221643' },
                                name: { s: 'Team-130931456' },
                                id: { s: '8' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676060221643,
                                name: 'Team-130931456',
                                id: '8',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676062619655' },
                                name: { s: 'Team-1414166512' },
                                id: { s: '1' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676062619655' },
                                name: { s: 'Team-1414166512' },
                                id: { s: '1' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676062619655,
                                name: 'Team-1414166512',
                                id: '1',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676061719734' },
                                name: { s: 'Team-1347137497' },
                                id: { s: '6' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676061719734' },
                                name: { s: 'Team-1347137497' },
                                id: { s: '6' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676061719734,
                                name: 'Team-1347137497',
                                id: '6',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676060557809' },
                                name: { s: 'Team-2082143188' },
                                id: { s: '0' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676060557809' },
                                name: { s: 'Team-2082143188' },
                                id: { s: '0' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676060557809,
                                name: 'Team-2082143188',
                                id: '0',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676062615990' },
                                name: { s: 'Team-1406585840' },
                                id: { s: '5' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676062615990' },
                                name: { s: 'Team-1406585840' },
                                id: { s: '5' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676062615990,
                                name: 'Team-1406585840',
                                id: '5',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676064734766' },
                                name: { s: 'Team-86566375' },
                                id: { s: '4' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676064734766' },
                                name: { s: 'Team-86566375' },
                                id: { s: '4' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676064734766,
                                name: 'Team-86566375',
                                id: '4',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 95,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676061134100' },
                                name: { s: 'Team-281025703' },
                                id: { s: '3' },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 96,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                        {
                            name: 'item',
                            type: 'java.util.HashMap',
                            value: {
                                creationTime: { n: '1676061134100' },
                                name: { s: 'Team-281025703' },
                                id: { s: '3' },
                            },
                        },
                        {
                            name: 'team',
                            type: 'io.thundra.lambda.demo.model.Team',
                            value: {
                                creationTime: 1676061134100,
                                name: 'Team-281025703',
                                id: '3',
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 97,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 99,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
                {
                    duration: 0,
                    line: 101,
                    localVars: [
                        {
                            name: 'teams',
                            type: 'java.util.ArrayList',
                            value: [
                                {
                                    creationTime: 1676064134848,
                                    name: 'Team-1095115612',
                                    id: '2',
                                },
                                {
                                    creationTime: 1676060221643,
                                    name: 'Team-130931456',
                                    id: '8',
                                },
                                {
                                    creationTime: 1676062619655,
                                    name: 'Team-1414166512',
                                    id: '1',
                                },
                                {
                                    creationTime: 1676061719734,
                                    name: 'Team-1347137497',
                                    id: '6',
                                },
                                {
                                    creationTime: 1676060557809,
                                    name: 'Team-2082143188',
                                    id: '0',
                                },
                                {
                                    creationTime: 1676062615990,
                                    name: 'Team-1406585840',
                                    id: '5',
                                },
                                {
                                    creationTime: 1676064734766,
                                    name: 'Team-86566375',
                                    id: '4',
                                },
                                {
                                    creationTime: 1676061134100,
                                    name: 'Team-281025703',
                                    id: '3',
                                },
                            ],
                        },
                        {
                            name: 'scanResult',
                            type: 'com.amazonaws.services.dynamodbv2.model.ScanResult',
                            value: {
                                scannedCount: 8,
                                count: 8,
                                items: [{}, {}, {}, {}, {}, {}, {}, {}],
                                sdkResponseMetadata: { metadata: {} },
                                sdkHttpMetadata: {
                                    httpHeaders: {},
                                    httpStatusCode: 200,
                                },
                            },
                        },
                    ],
                },
            ],
            'method.return_value': {
                type: 'java.util.ArrayList',
                value: [
                    {
                        creationTime: 1676064134848,
                        name: 'Team-1095115612',
                        id: '2',
                    },
                    {
                        creationTime: 1676060221643,
                        name: 'Team-130931456',
                        id: '8',
                    },
                    {
                        creationTime: 1676062619655,
                        name: 'Team-1414166512',
                        id: '1',
                    },
                    {
                        creationTime: 1676061719734,
                        name: 'Team-1347137497',
                        id: '6',
                    },
                    {
                        creationTime: 1676060557809,
                        name: 'Team-2082143188',
                        id: '0',
                    },
                    {
                        creationTime: 1676062615990,
                        name: 'Team-1406585840',
                        id: '5',
                    },
                    {
                        creationTime: 1676064734766,
                        name: 'Team-86566375',
                        id: '4',
                    },
                    {
                        creationTime: 1676061134100,
                        name: 'Team-281025703',
                        id: '3',
                    },
                ],
            },
            'method.args': [],
            'method.startLine': 88,
            'method.source':
                '    public Collection<Team> list() {\n        logger.debug(String.format("Teams will be listed"));\n\n        List<Team> teams = new ArrayList<Team>();\n        ScanResult scanResult = dynamoDBClient.scan(TABLE_NAME, Arrays.asList("id", "name", "creationTime"));\n\n        for (Map<String, AttributeValue> item : scanResult.getItems()) {\n            Team team = attributesToTeam(item);\n            teams.add(team);\n        }\n\n        logger.debug(String.format("Teams has been listed: %s", teams));\n\n        return teams;\n    }\n',
        },
    },
    {
        id: '9f624875-7536-4f2e-a545-12693dd212c3',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: 'DB',
        className: 'AWS-DynamoDB',
        parentSpanId: '805b6ff3-4e54-49d5-9049-69cbfb00a9ed',
        operationName: 'team-lambda-java-prod',
        startTimestamp: 1676065030690,
        finishTimestamp: 1676065030698,
        duration: 8,
        tags: {
            'db.instance': 'dynamodb.eu-west-1.amazonaws.com',
            'aws.dynamodb.table.name': 'team-lambda-java-prod',
            'aws.request.name': 'ScanRequest',
            'db.type': 'aws-dynamodb',
            'aws.service.name': 'AWS-DynamoDB',
            'aws.dynamodb.request.throttled': false,
            'operation.type': 'READ',
            'db.statement': '{"attributes":["id","name","creationTime"]}',
            'topology.vertex': true,
            'db.statement_type': 'READ',
        },
    },
    {
        id: '739f96c9-d2fc-43dd-9724-1867572907c9',
        applicationId:
            'aws:lambda:eu-west-1:775715653624:team-list-lambda-java-prod',
        applicationName: 'team-list-lambda-java-prod',
        traceId: '1-63e6b906-4dc93c2b3afc257215335dfb',
        transactionId: 'bd80eda7-fbb4-4510-99fa-3dd8dc88d4ad',
        domainName: '',
        className: 'Method',
        parentSpanId: '19af2fac-9cd6-4be2-babd-f7a8e82a52ed',
        operationName:
            'io.thundra.lambda.demo.handler.team.TeamListHandler$TeamListResponse.getTeams',
        startTimestamp: 1676065030699,
        finishTimestamp: 1676065030699,
        duration: 0,
        tags: {
            'method.return_value': {
                type: 'java.util.ArrayList',
                value: [
                    {
                        creationTime: 1676064134848,
                        name: 'Team-1095115612',
                        id: '2',
                    },
                    {
                        creationTime: 1676060221643,
                        name: 'Team-130931456',
                        id: '8',
                    },
                    {
                        creationTime: 1676062619655,
                        name: 'Team-1414166512',
                        id: '1',
                    },
                    {
                        creationTime: 1676061719734,
                        name: 'Team-1347137497',
                        id: '6',
                    },
                    {
                        creationTime: 1676060557809,
                        name: 'Team-2082143188',
                        id: '0',
                    },
                    {
                        creationTime: 1676062615990,
                        name: 'Team-1406585840',
                        id: '5',
                    },
                    {
                        creationTime: 1676064734766,
                        name: 'Team-86566375',
                        id: '4',
                    },
                    {
                        creationTime: 1676061134100,
                        name: 'Team-281025703',
                        id: '3',
                    },
                ],
            },
            'method.args': [],
        },
    },
]

export function getInvocationData() {
    return trace
}

export function getInvocationDataDetails() {
    const tracesArr = getInvocationData()

    const traceDetailObj = {}
    tracesArr.map((trace, index) => {
        traceDetailObj[`${trace.id}`] = (
            <div>
                <div>this is span details:</div>
                <div>
                    {trace.serviceName} - {trace.name} - {index}
                </div>
                JSON.stringify(trace);
            </div>
        )
    })

    return traceDetailObj
}
