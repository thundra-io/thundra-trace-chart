import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactTraceChart from '../../src'

class Demo extends Component {

  sampleTrace = () => {
		let trace = [
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '',
        id: '9400a8a9-9650-4312-9514-d4bbc1114a97',
        name: ' user-get-lambda-java-es',
        timestamp: 1557761782905000,
        duration: 281000,
        localEndpoint: {
          serviceName: 'AWS-Lambda',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          aws_lambda_invocation_response: '{}',
          aws_lambda_invocation_coldstart: false,
          aws_lambda_invocation_request_id: '91dc35a9-077c-422a-9e14-c98e8390402a',
          trigger_operationNames: '["user"]',
          aws_lambda_invocation_request: '{"empty":false,"callerId":"a4ef46ee-20a3-40de-857b-18cf580cfb5e","id":"1"}',
          aws_lambda_log_stream_name: '2019/05/13/[$LATEST]871c69bf0ee0483da59033529c3739e2',
          aws_lambda_memory_limit: 1536,
          aws_lambda_name: 'user-get-lambda-java-es',
          aws_lambda_log_group_name: '/aws/lambda/user-get-lambda-java-es',
          trigger_domainName: 'API',
          aws_region: 'eu-west-1',
          aws_lambda_arn: 'arn:aws:lambda:eu-west-1:775715653624:function:user-get-lambda-java-es',
          trigger_className: 'AWS-APIGateway',
          aws_lambda_invocation_timeout: false
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '9400a8a9-9650-4312-9514-d4bbc1114a97',
        id: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
        name: ' io.thundra.lambda.demo.service.UserService.get',
        timestamp: 1557761782907000,
        duration: 279000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
        id: '540dabe5-9013-4325-9b2a-4ee2bac711e2',
        name: ' io.thundra.lambda.demo.service.UserService.validateId',
        timestamp: 1557761782908000,
        duration: 4000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '540dabe5-9013-4325-9b2a-4ee2bac711e2',
        id: '8f645170-a590-4da6-926d-b54354c73602',
        name: ' io.thundra.lambda.demo.service.UserService.validateNotEmptyString',
        timestamp: 1557761782911000,
        duration: 1000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
        id: '50d6512e-3d9f-4ea6-9a96-9b4dee299407',
        name: ' io.thundra.lambda.demo.service.UserService.getFromCache',
        timestamp: 1557761782912000,
        duration: 12000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '50d6512e-3d9f-4ea6-9a96-9b4dee299407',
        id: '276f3be1-acbb-4c43-b6a5-1a30c8dafdbc',
        name: ' io.thundra.lambda.demo.cache.CacheManager.get',
        timestamp: 1557761782912000,
        duration: 12000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '276f3be1-acbb-4c43-b6a5-1a30c8dafdbc',
        id: '8f8e20d3-ff29-4fa9-86fc-107c28d155fa',
        name: ' localhost',
        timestamp: 1557761782913000,
        duration: 1,
        localEndpoint: {
          serviceName: 'Redis',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          topology_vertex: true,
          trigger_operationNames: '["user-get-lambda-java-es"]',
          trigger_domainName: 'API',
          operation_type: 'READ',
          trigger_className: 'AWS-Lambda',
          db_type: 'redis',
          redis_host: 'localhost',
          db_statement_type: 'READ',
          redis_command_type: 'GET',
          redis_command: 'GET "user::1"',
          db_statement: 'GET "user::1"',
          db_instance: 'localhost'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: 'da8c5131-f081-4db4-8045-88bd51ba76ae',
        id: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
        name: ' io.thundra.lambda.demo.repository.UserRepository.get',
        timestamp: 1557761782924000,
        duration: 261000,
        localEndpoint: {
          serviceName: 'Method',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_className: 'AWS-Lambda',
          trigger_domainName: 'API',
          trigger_operationNames: '["user-get-lambda-java-es"]'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
        id: '1d1b7bbc-4ca5-4563-9a0a-addc1c26e477',
        name: ' thundra_demo',
        timestamp: 1557761782925000,
        duration: 130000,
        localEndpoint: {
          serviceName: 'POSTGRESQL',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          db_statement: 'select user0_.id as id1_1_0_, user0_.creationTime as creation2_1_0_, user0_.name as name3_1_0_, cards1_.User_id as User_id1_2_1_, creditcard2_.no as cards_no2_2_1_, creditcard2_.no as no1_0_2_, creditcard2_.cvc as cvc2_0_2_, creditcard2_.expirationTime as expirati3_0_2_ from users user0_ left outer join users_creditcards cards1_ on user0_.id=cards1_.User_id left outer join creditcards creditcard2_ on cards1_.cards_no=creditcard2_.no where user0_.id=\'1\'',
          topology_vertex: true,
          operation_type: 'READ',
          trigger_domainName: 'API',
          db_instance: 'thundra_demo',
          db_statement_type: 'SELECT',
          db_type: 'postgresql',
          trigger_className: 'AWS-Lambda',
          trigger_operationNames: '["user-get-lambda-java-es"]'
        }
      },
      {
        traceId: '4e81414c-2bff-439f-9e5c-9e6699b4e24b',
        parentId: '004da99d-a52d-43a7-be04-be9b9b8f91ce',
        id: 'd5d252ce-f0e7-4de9-af26-a7262fdb4cdb',
        name: ' thundra_demo',
        timestamp: 1557761783056000,
        duration: 129000,
        localEndpoint: {
          serviceName: 'POSTGRESQL',
          ipv4: '0.0.0.0'
        },
        annotations: [
          {
            value: 'ws',
            timestamp: 1541138169337695
          },
          {
            value: 'wr',
            timestamp: 1541138169368570
          }
        ],
        tags: {
          trigger_className: 'AWS-Lambda',
          db_instance: 'thundra_demo',
          db_statement_type: 'COMMIT',
          trigger_domainName: 'API',
          db_type: 'postgresql',
          operation_type: 'COMMIT',
          trigger_operationNames: '["user-get-lambda-java-es"]',
          db_statement: 'commit',
          topology_vertex: true
        }
      }
    ]

		return trace;
  }
  
  render() {
    return <div>
      <h1>react-trace-chart Demo</h1>
      <ReactTraceChart
        name="ilker"
        traceSummary={this.sampleTrace()}
        // traceId="4e81414c-2bff-439f-9e5c-9e6699b4e24b"
        traceId="4e81414c-2bff-439f-9e5c-9e6699b4e24b"
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
