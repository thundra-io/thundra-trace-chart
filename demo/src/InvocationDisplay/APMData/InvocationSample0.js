export const invocationSample0 = [
  {
    id: 'eb04300f-d1a5-4fa4-95d7-b75710832d17',
    applicationId: 'aws:lambda:us-west-2:719056575148:tapp1',
    applicationName: 'tapp1',
    traceId: '1-641056d5-030b8cf987d328be73865cc1',
    transactionId: '70bf2e00-e633-4b64-a48f-5f4d3ab92e97',
    domainName: 'API',
    className: 'AWS-Lambda',
    operationName: 'tapp1',
    startTimestamp: 1678792501308,
    finishTimestamp: 1678792501348,
    duration: 40,
    tags: {},
  },
  {
    id: 'c05a98fe-862f-4703-8dbb-94b79d67ae6b',
    applicationId: 'aws:lambda:us-west-2:719056575148:tapp1',
    applicationName: 'tapp1',
    traceId: '1-641056d5-030b8cf987d328be73865cc1',
    transactionId: '70bf2e00-e633-4b64-a48f-5f4d3ab92e97',
    domainName: 'Messaging',
    className: 'AWS-SNS',
    parentSpanId: 'eb04300f-d1a5-4fa4-95d7-b75710832d17',
    operationName: 'topic-lab',
    startTimestamp: 1678792501313,
    finishTimestamp: 1678792501347,
    duration: 34,
    tags: {},
  },
];
