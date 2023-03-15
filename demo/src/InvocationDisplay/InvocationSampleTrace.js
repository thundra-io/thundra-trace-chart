import React from 'react';
const invocationTrace0 = [
  {
    id: 'eb04300f-d1a5-4fa4-95d7-b75710832d17',
    applicationId: 'aws:lambda:us-west-2:719056575148:foresight-notification-coordinator-workflow-run-lab',
    applicationName: 'foresight-notification-coordinator-workflow-run-lab',
    traceId: '1-641056d5-030b8cf987d328be73865cc1',
    transactionId: '70bf2e00-e633-4b64-a48f-5f4d3ab92e97',
    domainName: 'API',
    className: 'AWS-Lambda',
    operationName: 'foresight-notification-coordinator-workflow-run-lab',
    startTimestamp: 1678792501308,
    finishTimestamp: 1678792501348,
    duration: 40,
    tags: {
      'aws.lambda.invocation.coldstart': false,
      'trigger.className': 'AWS-DynamoDB',
      'aws.lambda.invocation.request': {
        records: [
          {
            eventID: '933896f7e1655199784fdd5322fa8e29',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'INSERT',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964730700000000004004456335',
              approximateCreationDateTime: 1678695344000,
              newImage: {
                latestActiveTimestamp: { n: '1678695343631' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":null,\\"status\\":\\"UNKNOWN\\",\\"conclusion\\":\\"UNKNOWN\\",\\"organizationId\\":null,\\"pullRequestIds\\":null,\\"runAttempt\\":null,\\"name\\":null,\\"headBranch\\":null,\\"headSha\\":null,\\"displayTitle\\":null,\\"runNumber\\":null,\\"event\\":null,\\"workflow\\":null,\\"repo\\":null,\\"headRepo\\":null,\\"createdAt\\":null,\\"updatedAt\\":null,\\"duration\\":null,\\"estimatedCost\\":0,\\"headCommit\\":null,\\"pullRequests\\":null,\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695286000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":null,\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695343631,"messageId":"085265b6-2f92-5d72-b36c-393ef22ebbff","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1678781743' },
                messageIds: { ss: ['085265b6-2f92-5d72-b36c-393ef22ebbff'] },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '1' },
              },
              keys: { id: { s: '4402735879-1' } },
              sizeBytes: 1512,
            },
          },
          {
            eventID: '28aa4c8670d17240d7d4ed1eb6f7cbb4',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964730800000000004004456987',
              approximateCreationDateTime: 1678695344000,
              newImage: {
                latestActiveTimestamp: { n: '1678695344785' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695284000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695286000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695344785,"messageId":"08b222a3-9053-5829-bbed-7e2b4de92181","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1681287344' },
                messageIds: { ss: ['085265b6-2f92-5d72-b36c-393ef22ebbff', '08b222a3-9053-5829-bbed-7e2b4de92181'] },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '2' },
              },
              keys: { id: { s: '4402735879-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695343631' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":null,\\"status\\":\\"UNKNOWN\\",\\"conclusion\\":\\"UNKNOWN\\",\\"organizationId\\":null,\\"pullRequestIds\\":null,\\"runAttempt\\":null,\\"name\\":null,\\"headBranch\\":null,\\"headSha\\":null,\\"displayTitle\\":null,\\"runNumber\\":null,\\"event\\":null,\\"workflow\\":null,\\"repo\\":null,\\"headRepo\\":null,\\"createdAt\\":null,\\"updatedAt\\":null,\\"duration\\":null,\\"estimatedCost\\":0,\\"headCommit\\":null,\\"pullRequests\\":null,\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695286000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":null,\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695343631,"messageId":"085265b6-2f92-5d72-b36c-393ef22ebbff","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1678781743' },
                messageIds: { ss: ['085265b6-2f92-5d72-b36c-393ef22ebbff'] },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '1' },
              },
              sizeBytes: 3845,
            },
          },
          {
            eventID: 'a0a075bd281759851f925ece985dfa1c',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964730900000000004004468816',
              approximateCreationDateTime: 1678695358000,
              newImage: {
                latestActiveTimestamp: { n: '1678695358096' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695284000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695304000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":1,\\"startedAt\\":1678695303000,\\"completedAt\\":1678695304000,\\"duration\\":1000}],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695358096,"messageId":"5db33ccb-09b7-563e-8ca2-6043d47db9d2","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1681287358' },
                messageIds: {
                  ss: [
                    '085265b6-2f92-5d72-b36c-393ef22ebbff',
                    '08b222a3-9053-5829-bbed-7e2b4de92181',
                    '5db33ccb-09b7-563e-8ca2-6043d47db9d2',
                  ],
                },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '3' },
              },
              keys: { id: { s: '4402735879-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695344785' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695284000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695286000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695344785,"messageId":"08b222a3-9053-5829-bbed-7e2b4de92181","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1681287344' },
                messageIds: { ss: ['085265b6-2f92-5d72-b36c-393ef22ebbff', '08b222a3-9053-5829-bbed-7e2b4de92181'] },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '2' },
              },
              sizeBytes: 4899,
            },
          },
          {
            eventID: '0e3adb6729d4722633ae82df1924a28f',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731000000000004004469150',
              approximateCreationDateTime: 1678695358000,
              newImage: {
                latestActiveTimestamp: { n: '1678695358705' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695306000,\\"duration\\":22000,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695304000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":1,\\"startedAt\\":1678695303000,\\"completedAt\\":1678695304000,\\"duration\\":1000}],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695358705,"messageId":"a0033edd-5f69-54b9-86b8-625582a5a328","id":"4402735879-1","completed":true}',
                },
                expireTimestamp: { n: '1678781758' },
                messageIds: {
                  ss: [
                    '085265b6-2f92-5d72-b36c-393ef22ebbff',
                    '08b222a3-9053-5829-bbed-7e2b4de92181',
                    '5db33ccb-09b7-563e-8ca2-6043d47db9d2',
                    'a0033edd-5f69-54b9-86b8-625582a5a328',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402735879-1' },
                version: { n: '4' },
              },
              keys: { id: { s: '4402735879-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695358096' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695284000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695304000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":1,\\"startedAt\\":1678695303000,\\"completedAt\\":1678695304000,\\"duration\\":1000}],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695358096,"messageId":"5db33ccb-09b7-563e-8ca2-6043d47db9d2","id":"4402735879-1","completed":false}',
                },
                expireTimestamp: { n: '1681287358' },
                messageIds: {
                  ss: [
                    '085265b6-2f92-5d72-b36c-393ef22ebbff',
                    '08b222a3-9053-5829-bbed-7e2b4de92181',
                    '5db33ccb-09b7-563e-8ca2-6043d47db9d2',
                  ],
                },
                completed: { bool: false },
                id: { s: '4402735879-1' },
                version: { n: '3' },
              },
              sizeBytes: 5167,
            },
          },
          {
            eventID: '44faacbf6059cc644932402d6ed955aa',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731100000000004004469725',
              approximateCreationDateTime: 1678695359000,
              newImage: {
                latestActiveTimestamp: { n: '1678695359375' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695306000,\\"duration\\":22000,\\"estimatedCost\\":0.016,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"startedAt\\":1678695304000,\\"completedAt\\":1678695305000,\\"duration\\":1000,\\"estimatedCost\\":0.016,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":1,\\"startedAt\\":1678695303000,\\"completedAt\\":1678695304000,\\"duration\\":1000}],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695359375,"messageId":"49818b9d-8c09-54ec-9545-d71551c5437d","id":"4402735879-1","completed":true}',
                },
                expireTimestamp: { n: '1678781759' },
                messageIds: {
                  ss: [
                    '085265b6-2f92-5d72-b36c-393ef22ebbff',
                    '08b222a3-9053-5829-bbed-7e2b4de92181',
                    '49818b9d-8c09-54ec-9545-d71551c5437d',
                    '5db33ccb-09b7-563e-8ca2-6043d47db9d2',
                    'a0033edd-5f69-54b9-86b8-625582a5a328',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402735879-1' },
                version: { n: '5' },
              },
              keys: { id: { s: '4402735879-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695358705' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"053c05cc-4987-3988-8fb3-c98065ebf28f\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402735879\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab Windows WorkflowKit/TestKit Action\\",\\"runNumber\\":389,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"47902353\\",\\"name\\":\\"Lab Windows WorkflowKit/TestKit Action\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695284000,\\"updatedAt\\":1678695306000,\\"duration\\":22000,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950597204\\",\\"runId\\":\\"4402735879\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695304000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"WINDOWS\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":1,\\"startedAt\\":1678695303000,\\"completedAt\\":1678695304000,\\"duration\\":1000}],\\"labels\\":[\\"windows-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695358705,"messageId":"a0033edd-5f69-54b9-86b8-625582a5a328","id":"4402735879-1","completed":true}',
                },
                expireTimestamp: { n: '1678781758' },
                messageIds: {
                  ss: [
                    '085265b6-2f92-5d72-b36c-393ef22ebbff',
                    '08b222a3-9053-5829-bbed-7e2b4de92181',
                    '5db33ccb-09b7-563e-8ca2-6043d47db9d2',
                    'a0033edd-5f69-54b9-86b8-625582a5a328',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402735879-1' },
                version: { n: '4' },
              },
              sizeBytes: 5277,
            },
          },
          {
            eventID: '3be88f762bf99371d0b1577d007020c4',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'INSERT',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731200000000004004489938',
              approximateCreationDateTime: 1678695382000,
              newImage: {
                latestActiveTimestamp: { n: '1678695382738' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695382738,"messageId":"a632a03a-7c54-5c7b-abf9-fcb2a242ca99","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287382' },
                messageIds: { ss: ['a632a03a-7c54-5c7b-abf9-fcb2a242ca99'] },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '1' },
              },
              keys: { id: { s: '4402748568-1' } },
              sizeBytes: 1759,
            },
          },
          {
            eventID: '26ddea62b9396693f7f8ca44bcd57c49',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731300000000004004490456',
              approximateCreationDateTime: 1678695383000,
              newImage: {
                latestActiveTimestamp: { n: '1678695383326' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695382000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695383326,"messageId":"2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287383' },
                messageIds: { ss: ['2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23', 'a632a03a-7c54-5c7b-abf9-fcb2a242ca99'] },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '2' },
              },
              keys: { id: { s: '4402748568-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695382738' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695382738,"messageId":"a632a03a-7c54-5c7b-abf9-fcb2a242ca99","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287382' },
                messageIds: { ss: ['a632a03a-7c54-5c7b-abf9-fcb2a242ca99'] },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '1' },
              },
              sizeBytes: 4064,
            },
          },
          {
            eventID: '327720d66cca2807daf6d53da0cf840a',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731400000000004004496937',
              approximateCreationDateTime: 1678695390000,
              newImage: {
                latestActiveTimestamp: { n: '1678695390751' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695388000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"number\\":1,\\"startedAt\\":1678695387000,\\"completedAt\\":null,\\"duration\\":0}],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695390751,"messageId":"e2962784-d50b-5b20-a3c2-7b0c0b15edc2","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287390' },
                messageIds: {
                  ss: [
                    '2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23',
                    'a632a03a-7c54-5c7b-abf9-fcb2a242ca99',
                    'e2962784-d50b-5b20-a3c2-7b0c0b15edc2',
                  ],
                },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '3' },
              },
              keys: { id: { s: '4402748568-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695383326' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"startedAt\\":1678695382000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695383326,"messageId":"2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287383' },
                messageIds: { ss: ['2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23', 'a632a03a-7c54-5c7b-abf9-fcb2a242ca99'] },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '2' },
              },
              sizeBytes: 4826,
            },
          },
          {
            eventID: '76190c8d4009c0923f3815778170a51a',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731500000000004004530938',
              approximateCreationDateTime: 1678695427000,
              newImage: {
                latestActiveTimestamp: { n: '1678695427097' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695425000,\\"duration\\":44000,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695388000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"number\\":1,\\"startedAt\\":1678695387000,\\"completedAt\\":null,\\"duration\\":0}],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695427097,"messageId":"05db7f81-e8d9-5be4-a799-2309369b1f8d","id":"4402748568-1","completed":true}',
                },
                expireTimestamp: { n: '1678781827' },
                messageIds: {
                  ss: [
                    '05db7f81-e8d9-5be4-a799-2309369b1f8d',
                    '2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23',
                    'a632a03a-7c54-5c7b-abf9-fcb2a242ca99',
                    'e2962784-d50b-5b20-a3c2-7b0c0b15edc2',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402748568-1' },
                version: { n: '4' },
              },
              keys: { id: { s: '4402748568-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695390751' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"QUEUED\\",\\"conclusion\\":null,\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695381000,\\"duration\\":0,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695388000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"number\\":1,\\"startedAt\\":1678695387000,\\"completedAt\\":null,\\"duration\\":0}],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695390751,"messageId":"e2962784-d50b-5b20-a3c2-7b0c0b15edc2","id":"4402748568-1","completed":false}',
                },
                expireTimestamp: { n: '1681287390' },
                messageIds: {
                  ss: [
                    '2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23',
                    'a632a03a-7c54-5c7b-abf9-fcb2a242ca99',
                    'e2962784-d50b-5b20-a3c2-7b0c0b15edc2',
                  ],
                },
                completed: { bool: false },
                id: { s: '4402748568-1' },
                version: { n: '3' },
              },
              sizeBytes: 5077,
            },
          },
          {
            eventID: '7dc43419f311ea90786fa83248319401',
            awsRegion: 'us-west-2',
            eventSourceARN:
              'arn:aws:dynamodb:us-west-2:719056575148:table/foresight-workflow-run-table-lab/stream/2022-08-23T08:19:24.389',
            eventVersion: '1.1',
            eventSource: 'aws:dynamodb',
            eventName: 'MODIFY',
            dynamodb: {
              streamViewType: 'NEW_AND_OLD_IMAGES',
              sequenceNumber: '964731600000000004004531501',
              approximateCreationDateTime: 1678695427000,
              newImage: {
                latestActiveTimestamp: { n: '1678695427493' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695425000,\\"duration\\":44000,\\"estimatedCost\\":0.008,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"startedAt\\":1678695388000,\\"completedAt\\":1678695424000,\\"duration\\":36000,\\"estimatedCost\\":0.008,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":1,\\"startedAt\\":1678695387000,\\"completedAt\\":1678695389000,\\"duration\\":2000},{\\"id\\":null,\\"name\\":\\"Collect Workflow Telemetry\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":2,\\"startedAt\\":1678695390000,\\"completedAt\\":1678695395000,\\"duration\\":5000},{\\"id\\":null,\\"name\\":\\"Run actions/checkout@v3\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":3,\\"startedAt\\":1678695395000,\\"completedAt\\":1678695395000,\\"duration\\":0},{\\"id\\":null,\\"name\\":\\"Set up JDK 11\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":4,\\"startedAt\\":1678695396000,\\"completedAt\\":1678695397000,\\"duration\\":1000},{\\"id\\":null,\\"name\\":\\"Build with Maven\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"number\\":5,\\"startedAt\\":1678695397000,\\"completedAt\\":1678695409000,\\"duration\\":12000},{\\"id\\":null,\\"name\\":\\"Analyze Test and/or Coverage Results\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":6,\\"startedAt\\":1678695410000,\\"completedAt\\":1678695421000,\\"duration\\":11000},{\\"id\\":null,\\"name\\":\\"Post Set up JDK 11\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":10,\\"startedAt\\":1678695421000,\\"completedAt\\":1678695421000,\\"duration\\":0},{\\"id\\":null,\\"name\\":\\"Post Run actions/checkout@v3\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":11,\\"startedAt\\":1678695421000,\\"completedAt\\":1678695421000,\\"duration\\":0},{\\"id\\":null,\\"name\\":\\"Post Collect Workflow Telemetry\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":12,\\"startedAt\\":1678695422000,\\"completedAt\\":1678695423000,\\"duration\\":1000},{\\"id\\":null,\\"name\\":\\"Complete job\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"SUCCESS\\",\\"number\\":13,\\"startedAt\\":1678695423000,\\"completedAt\\":1678695423000,\\"duration\\":0}],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695427493,"messageId":"c23a1ddd-75a6-5599-8b15-4155abe5dfb7","id":"4402748568-1","completed":true}',
                },
                expireTimestamp: { n: '1678781827' },
                messageIds: {
                  ss: [
                    '05db7f81-e8d9-5be4-a799-2309369b1f8d',
                    '2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23',
                    'a632a03a-7c54-5c7b-abf9-fcb2a242ca99',
                    'c23a1ddd-75a6-5599-8b15-4155abe5dfb7',
                    'e2962784-d50b-5b20-a3c2-7b0c0b15edc2',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402748568-1' },
                version: { n: '5' },
              },
              keys: { id: { s: '4402748568-1' } },
              oldImage: {
                latestActiveTimestamp: { n: '1678695427097' },
                data: {
                  s: '{"eventData":"{\\"id\\":\\"25a74551-cf79-3d29-8458-6a9f41527918\\",\\"userAccountId\\":\\"9d40e2a9-5fa0-46f8-a537-8371d6127859\\",\\"repoId\\":\\"1e06f4f4-df13-4393-b0ae-38c412cbfd39\\",\\"provider\\":\\"GITHUB\\",\\"runId\\":\\"4402748568\\",\\"status\\":\\"COMPLETED\\",\\"conclusion\\":\\"FAILURE\\",\\"organizationId\\":\\"670a8d80-0e82-4edc-b3e4-13091320cb68\\",\\"pullRequestIds\\":[],\\"runAttempt\\":1,\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"headBranch\\":\\"main\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"displayTitle\\":\\"Lab WorkflowKit/TestKit Flaky\\",\\"runNumber\\":1152,\\"event\\":\\"schedule\\",\\"workflow\\":{\\"id\\":\\"46198377\\",\\"name\\":\\"Lab WorkflowKit/TestKit Flaky\\"},\\"repo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"headRepo\\":{\\"id\\":\\"520552090\\",\\"fullName\\":\\"erdoganforesight/java-test-deneme\\",\\"name\\":\\"java-test-deneme\\",\\"owner\\":\\"erdoganforesight\\"},\\"createdAt\\":1678695381000,\\"updatedAt\\":1678695425000,\\"duration\\":44000,\\"estimatedCost\\":0,\\"headCommit\\":{\\"id\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"message\\":\\"Update TestMagicBuilder.java\\",\\"author\\":{\\"name\\":\\"erdoganforesight\\",\\"email\\":\\"89521820+erdoganforesight@users.noreply.github.com\\"},\\"committer\\":{\\"name\\":\\"GitHub\\",\\"email\\":\\"noreply@github.com\\"},\\"timestamp\\":1677167954000},\\"pullRequests\\":[],\\"jobs\\":[{\\"id\\":\\"11950631108\\",\\"runId\\":\\"4402748568\\",\\"name\\":\\"build maven demo with|pipe\\",\\"url\\":\\"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950631108\\",\\"headSha\\":\\"89714201acdf5bf4d13a8ad848654fdf8b121d21\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"startedAt\\":1678695388000,\\"completedAt\\":null,\\"duration\\":0,\\"estimatedCost\\":0,\\"ciRunnerType\\":\\"UBUNTU\\",\\"runnerId\\":0,\\"runnerName\\":null,\\"runnerGroupId\\":0,\\"runnerGroupName\\":null,\\"steps\\":[{\\"id\\":null,\\"name\\":\\"Set up job\\",\\"status\\":\\"IN_PROGRESS\\",\\"conclusion\\":null,\\"number\\":1,\\"startedAt\\":1678695387000,\\"completedAt\\":null,\\"duration\\":0}],\\"labels\\":[\\"ubuntu-latest\\"]}],\\"pullRequestNumbers\\":[],\\"forkBranch\\":false}","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","eventTime":1678695427097,"messageId":"05db7f81-e8d9-5be4-a799-2309369b1f8d","id":"4402748568-1","completed":true}',
                },
                expireTimestamp: { n: '1678781827' },
                messageIds: {
                  ss: [
                    '05db7f81-e8d9-5be4-a799-2309369b1f8d',
                    '2aa5f5b0-3e40-5ac1-b0c2-a938e057ac23',
                    'a632a03a-7c54-5c7b-abf9-fcb2a242ca99',
                    'e2962784-d50b-5b20-a3c2-7b0c0b15edc2',
                  ],
                },
                completed: { bool: true },
                id: { s: '4402748568-1' },
                version: { n: '4' },
              },
              sizeBytes: 6923,
            },
          },
        ],
      },
      error: true,
      'trigger.operationNames': ['foresight-workflow-run-table-lab'],
      'aws.lambda.log_stream_name': '2023/03/14/[$LATEST]0e5048c25c7d45bb84eb039de85c4b7d',
      'trigger.domainName': 'DB',
      'aws.lambda.memory_limit': 1740,
      'aws.lambda.invocation.request_id': 'b4793d2e-18c4-48dc-874a-f07711e051a1',
      'aws.lambda.arn':
        'arn:aws:lambda:us-west-2:719056575148:function:foresight-notification-coordinator-workflow-run-lab',
      'aws.region': 'us-west-2',
      'aws.lambda.log_group_name': '/aws/lambda/foresight-notification-coordinator-workflow-run-lab',
      'error.kind': 'IOException',
      'aws.lambda.invocation.timeout': false,
      'error.message': 'Error occurred while sending SNS event',
      'error.stack':
        'java.io.IOException: Error occurred while sending SNS event\n\tat com.runforesight.common.service.sns.impl.SnsServiceImpl.publishDataToSns(SnsServiceImpl.java:66)\n\tat com.runforesight.notification.coordinator.WorkflowRunNotificationCoordinatorHandler.doHandleRequest(WorkflowRunNotificationCoordinatorHandler.java:55)\n\tat com.runforesight.notification.coordinator.WorkflowRunNotificationCoordinatorHandler.doHandleRequest(WorkflowRunNotificationCoordinatorHandler.java:31)\n\tat io.thundra.lambda.core.AbstractRequestHandler.handleRequest(AbstractRequestHandler.java:40)\n\tat io.thundra.lambda.spring.SpringAwareBaseLambdaRequestHandler.handleRequest(SpringAwareBaseLambdaRequestHandler.java:67)\n\tat io.thundra.agent.lambda.core.handler.ThundraLambdaHandler$ProxyLambdaRequestHandler.doHandleRequest(ThundraLambdaHandler.java:183)\n\tat io.thundra.agent.lambda.core.handler.BaseLambdaHandler.doExecuteHandleRequest(BaseLambdaHandler.java:415)\n\tat io.thundra.agent.lambda.core.handler.requeststream.BaseLambdaRequestStreamHandler.handleRequestInternal(BaseLambdaRequestStreamHandler.java:65)\n\tat io.thundra.agent.lambda.core.handler.requeststream.BaseLambdaRequestStreamHandler.doHandleRequestStream(BaseLambdaRequestStreamHandler.java:136)\n\tat io.thundra.agent.lambda.core.handler.requeststream.BaseLambdaRequestStreamHandler.handleRequest(BaseLambdaRequestStreamHandler.java:195)\n\tat io.thundra.agent.lambda.core.handler.ThundraLambdaHandler.handleRequest(ThundraLambdaHandler.java:112)\n\tat lambdainternal.EventHandlerLoader$2.call(EventHandlerLoader.java:899)\n\tat lambdainternal.AWSLambda.startRuntime(AWSLambda.java:268)\n\tat lambdainternal.AWSLambda.startRuntime(AWSLambda.java:206)\n\tat lambdainternal.AWSLambda.main(AWSLambda.java:200)\nCaused by: software.amazon.awssdk.services.sns.model.NotFoundException: Topic does not exist (Service: Sns, Status Code: 404, Request ID: 242b7897-a133-55d7-acb0-241df846cdbf, Extended Request ID: null)\n\tat software.amazon.awssdk.core.internal.http.CombinedResponseHandler.handleErrorResponse(CombinedResponseHandler.java:125)\n\tat software.amazon.awssdk.core.internal.http.CombinedResponseHandler.handleResponse(CombinedResponseHandler.java:82)\n\tat software.amazon.awssdk.core.internal.http.CombinedResponseHandler.handle(CombinedResponseHandler.java:60)\n\tat software.amazon.awssdk.core.internal.http.CombinedResponseHandler.handle(CombinedResponseHandler.java:41)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.HandleResponseStage.execute(HandleResponseStage.java:40)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.HandleResponseStage.execute(HandleResponseStage.java:30)\n\tat software.amazon.awssdk.core.internal.http.pipeline.RequestPipelineBuilder$ComposingRequestPipelineStage.execute(RequestPipelineBuilder.java:206)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallAttemptTimeoutTrackingStage.execute(ApiCallAttemptTimeoutTrackingStage.java:73)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallAttemptTimeoutTrackingStage.execute(ApiCallAttemptTimeoutTrackingStage.java:42)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.TimeoutExceptionHandlingStage.execute(TimeoutExceptionHandlingStage.java:78)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.TimeoutExceptionHandlingStage.execute(TimeoutExceptionHandlingStage.java:40)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallAttemptMetricCollectionStage.execute(ApiCallAttemptMetricCollectionStage.java:50)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallAttemptMetricCollectionStage.execute(ApiCallAttemptMetricCollectionStage.java:36)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.RetryableStage.execute(RetryableStage.java:81)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.RetryableStage.execute(RetryableStage.java:36)\n\tat software.amazon.awssdk.core.internal.http.pipeline.RequestPipelineBuilder$ComposingRequestPipelineStage.execute(RequestPipelineBuilder.java:206)\n\tat software.amazon.awssdk.core.internal.http.StreamManagingStage.execute(StreamManagingStage.java:56)\n\tat software.amazon.awssdk.core.internal.http.StreamManagingStage.execute(StreamManagingStage.java:36)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallTimeoutTrackingStage.executeWithTimer(ApiCallTimeoutTrackingStage.java:80)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallTimeoutTrackingStage.execute(ApiCallTimeoutTrackingStage.java:60)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallTimeoutTrackingStage.execute(ApiCallTimeoutTrackingStage.java:42)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallMetricCollectionStage.execute(ApiCallMetricCollectionStage.java:48)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ApiCallMetricCollectionStage.execute(ApiCallMetricCollectionStage.java:31)\n\tat software.amazon.awssdk.core.internal.http.pipeline.RequestPipelineBuilder$ComposingRequestPipelineStage.execute(RequestPipelineBuilder.java:206)\n\tat software.amazon.awssdk.core.internal.http.pipeline.RequestPipelineBuilder$ComposingRequestPipelineStage.execute(RequestPipelineBuilder.java:206)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ExecutionFailureExceptionReportingStage.execute(ExecutionFailureExceptionReportingStage.java:37)\n\tat software.amazon.awssdk.core.internal.http.pipeline.stages.ExecutionFailureExceptionReportingStage.execute(ExecutionFailureExceptionReportingStage.java:26)\n\tat software.amazon.awssdk.core.internal.http.AmazonSyncHttpClient$RequestExecutionBuilderImpl.execute(AmazonSyncHttpClient.java:193)\n\tat software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.invoke(BaseSyncClientHandler.java:103)\n\tat software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.doExecute(BaseSyncClientHandler.java:167)\n\tat software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.lambda$execute$1(BaseSyncClientHandler.java:82)\n\tat software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.measureApiCallSuccess(BaseSyncClientHandler.java:175)\n\tat software.amazon.awssdk.core.internal.handler.BaseSyncClientHandler.execute(BaseSyncClientHandler.java:76)\n\tat software.amazon.awssdk.core.client.handler.SdkSyncClientHandler.execute(SdkSyncClientHandler.java:45)\n\tat software.amazon.awssdk.awscore.client.handler.AwsSyncClientHandler.execute(AwsSyncClientHandler.java:56)\n\tat software.amazon.awssdk.services.sns.DefaultSnsClient.publish(DefaultSnsClient.java:2797)\n\tat com.runforesight.common.service.sns.impl.SnsServiceImpl.publishDataToSns(SnsServiceImpl.java:62)\n\t... 14 more\n',
      'aws.lambda.name': 'foresight-notification-coordinator-workflow-run-lab',
    },
  },
  {
    id: 'c05a98fe-862f-4703-8dbb-94b79d67ae6b',
    applicationId: 'aws:lambda:us-west-2:719056575148:foresight-notification-coordinator-workflow-run-lab',
    applicationName: 'foresight-notification-coordinator-workflow-run-lab',
    traceId: '1-641056d5-030b8cf987d328be73865cc1',
    transactionId: '70bf2e00-e633-4b64-a48f-5f4d3ab92e97',
    domainName: 'Messaging',
    className: 'AWS-SNS',
    parentSpanId: 'eb04300f-d1a5-4fa4-95d7-b75710832d17',
    operationName: 'foresight-workflow-run-notification-topic-lab',
    startTimestamp: 1678792501313,
    finishTimestamp: 1678792501347,
    duration: 34,
    tags: {
      'aws.request.name': 'PublishRequest',
      'aws.service.name': 'AWS-SNS',
      'aws.sns.topic.name': 'foresight-workflow-run-notification-topic-lab',
      'operation.type': 'WRITE',
      'topology.vertex': true,
      'aws.sns.message':
        '{"id":"053c05cc-4987-3988-8fb3-c98065ebf28f","userAccountId":"9d40e2a9-5fa0-46f8-a537-8371d6127859","repoId":"1e06f4f4-df13-4393-b0ae-38c412cbfd39","provider":"GITHUB","runId":"4402735879","status":"COMPLETED","conclusion":"FAILURE","organizationId":"670a8d80-0e82-4edc-b3e4-13091320cb68","pullRequestIds":[],"runAttempt":1,"name":"Lab Windows WorkflowKit/TestKit Action","headBranch":"main","headSha":"89714201acdf5bf4d13a8ad848654fdf8b121d21","displayTitle":"Lab Windows WorkflowKit/TestKit Action","runNumber":389,"event":"schedule","workflow":{"id":"47902353","name":"Lab Windows WorkflowKit/TestKit Action"},"repo":{"id":"520552090","fullName":"erdoganforesight/java-test-deneme","name":"java-test-deneme","owner":"erdoganforesight"},"headRepo":{"id":"520552090","fullName":"erdoganforesight/java-test-deneme","name":"java-test-deneme","owner":"erdoganforesight"},"createdAt":1678695284000,"updatedAt":1678695306000,"duration":22000,"estimatedCost":0,"headCommit":{"id":"89714201acdf5bf4d13a8ad848654fdf8b121d21","message":"Update TestMagicBuilder.java","author":{"name":"erdoganforesight","email":"89521820+erdoganforesight@users.noreply.github.com"},"committer":{"name":"GitHub","email":"noreply@github.com"}},"pullRequests":[],"jobs":[{"id":"11950597204","runId":"4402735879","name":"build maven demo with|pipe","url":"https://api.github.com/repos/erdoganforesight/java-test-deneme/actions/jobs/11950597204","headSha":"89714201acdf5bf4d13a8ad848654fdf8b121d21","status":"IN_PROGRESS","conclusion":null,"startedAt":1678695304000,"completedAt":null,"duration":0,"estimatedCost":0,"ciRunnerType":"WINDOWS","runnerId":0,"runnerName":null,"runnerGroupId":0,"runnerGroupName":null,"steps":[{"id":null,"name":"Set up job","status":"COMPLETED","conclusion":"FAILURE","number":1,"startedAt":1678695303000,"completedAt":1678695304000,"duration":1000}],"labels":["windows-latest"]}],"pullRequestNumbers":[],"forkBranch":false}',
    },
  },
];

const TRACECHART_CONFIG = {
  LAMBDA: {
    color: '#DC822F',
    text: 'Lambda',
  },
  SNS: {
    color: '#9E8739',
    text: 'SNS',
  },
};

const trace = [
  {
    traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
    parentId: '',
    id: '164ed884-fd81-36cf-9d1b-36e76883b730',
    name: 'foresight-notification-coordinator-workflow-run-lab',
    timestamp: 1658296525718,
    duration: 104000,
    serviceName: TRACECHART_CONFIG.LAMBDA.text,
    markerColor: TRACECHART_CONFIG.LAMBDA.color,
    color: TRACECHART_CONFIG.LAMBDA.color,
    criticalPathColor: 'transparent',
    backgroundClass: 'erroneous-span',
  },
  {
    traceId: '382d12cc-b846-3837-ba10-7b9f79796929',
    parentId: '164ed884-fd81-36cf-9d1b-36e76883b730',
    id: '264ed884-fd81-36cf-9d1b-36e76883b730',
    name: 'WRITE/foresight-workflow-run-notification-topic-lab',
    timestamp: 1658296527718,
    duration: 22000,
    serviceName: TRACECHART_CONFIG.SNS.text,
    markerColor: TRACECHART_CONFIG.SNS.color,
    color: TRACECHART_CONFIG.SNS.color,
    criticalPathColor: 'transparent',
  },
];

export function getInvocationData() {
  return trace;
}

export function getInvocationDataDetails() {
  const tracesArr = getInvocationData();

  const traceDetailObj = {};
  tracesArr.map((trace, index) => {
    traceDetailObj[`${trace.id}`] = (
      <div>
        <div>this is span details:</div>
        <div>
          {trace.serviceName} - {trace.name} - {index}
        </div>
        JSON.stringify(trace);
      </div>
    );
  });

  return traceDetailObj;
}
