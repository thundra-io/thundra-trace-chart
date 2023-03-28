import { SERVICES_ASSETS } from './ServicesAssets';

export const SpanConstants = {
  'AWS-Athena': {
    backgroundColor: SERVICES_ASSETS.ATHENA.color,
    text: SERVICES_ASSETS.ATHENA.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.ATHENA.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['aws.request.name'], join: ' / ', default: '-' },
    },
  },
  'AWS-AURORA': {
    backgroundColor: SERVICES_ASSETS.AURORA.color,
    text: SERVICES_ASSETS.AURORA.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.AURORA.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'operation.type', default: '-' },
    },
  },
  'AWS-DynamoDB': {
    backgroundColor: SERVICES_ASSETS.DynamoDB.color,
    text: SERVICES_ASSETS.DynamoDB.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.DynamoDB.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['db.statement_type', 'aws.dynamodb.table.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  ELASTICSEARCH: {
    backgroundColor: SERVICES_ASSETS.ELASTICSEARCH.color,
    text: SERVICES_ASSETS.ELASTICSEARCH.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.ELASTICSEARCH.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['operation.type', 'elasticsearch.uri'], join: ' ', default: '-' },
    },
  },
  RabbitMQ: {
    backgroundColor: SERVICES_ASSETS.RabbitMQ.color,
    text: SERVICES_ASSETS.RabbitMQ.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.RabbitMQ.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'amqp.queue'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-SQS': {
    backgroundColor: SERVICES_ASSETS.SQS.color,
    text: SERVICES_ASSETS.SQS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SQS.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.sqs.queue.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-SNS': {
    backgroundColor: SERVICES_ASSETS.SNS.color,
    text: SERVICES_ASSETS.SNS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SNS.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.sns.topic.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-StepFunctions': {
    backgroundColor: SERVICES_ASSETS.STEPFUNCTIONS.color,
    text: SERVICES_ASSETS.STEPFUNCTIONS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.STEPFUNCTIONS.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type'],
        default: '-',
      },
    },
  },
  'AWS-Kinesis': {
    backgroundColor: SERVICES_ASSETS.KINESIS.color,
    text: SERVICES_ASSETS.KINESIS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.KINESIS.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.kinesis.stream.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-Firehose': {
    backgroundColor: SERVICES_ASSETS.FIREHOSE.color,
    text: SERVICES_ASSETS.FIREHOSE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.FIREHOSE.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.firehose.stream.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-S3': {
    backgroundColor: SERVICES_ASSETS.S3.color,
    text: SERVICES_ASSETS.S3.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.S3.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.s3.bucket.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-APPSYNC': {
    backgroundColor: SERVICES_ASSETS.APPSYNC.color,
    text: SERVICES_ASSETS.APPSYNC.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.APPSYNC.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['aws.appsync.span.method', 'aws.appsync.span.endpoint'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-EventBridge': {
    backgroundColor: SERVICES_ASSETS.EVENTBRIDGE.color,
    text: SERVICES_ASSETS.EVENTBRIDGE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.EVENTBRIDGE.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['operation.type', 'aws.eventbridge.eventbus.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  'AWS-APIGateway': {
    backgroundColor: SERVICES_ASSETS.APIGATEWAY.color,
    text: SERVICES_ASSETS.APIGATEWAY.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.APIGATEWAY.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  'AWS-Lambda': {
    backgroundColor: SERVICES_ASSETS.LAMBDA.color,
    text: SERVICES_ASSETS.LAMBDA.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.LAMBDA.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'aws.lambda.name', default: '-' },
    },
  },
  'AWS-SES': {
    backgroundColor: SERVICES_ASSETS.SES.color,
    text: SERVICES_ASSETS.SES.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SES.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  JUnit4: {
    backgroundColor: SERVICES_ASSETS.JUNIT4.color,
    text: SERVICES_ASSETS.JUNIT4.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.JUNIT4.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  JUnit5: {
    backgroundColor: SERVICES_ASSETS.JUNIT5.color,
    text: SERVICES_ASSETS.JUNIT5.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.JUNIT5.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Jest: {
    backgroundColor: SERVICES_ASSETS.JEST.color,
    text: SERVICES_ASSETS.JEST.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.JEST.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  PyTest: {
    backgroundColor: SERVICES_ASSETS.PYTEST.color,
    text: SERVICES_ASSETS.PYTEST.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.PYTEST.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Selenium: {
    backgroundColor: SERVICES_ASSETS.SELENIUM.color,
    text: SERVICES_ASSETS.SELENIUM.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SELENIUM.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Spring: {
    backgroundColor: SERVICES_ASSETS.SPRING.color,
    text: SERVICES_ASSETS.SPRING.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SPRING.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Django: {
    backgroundColor: SERVICES_ASSETS.DJANGO.color,
    text: SERVICES_ASSETS.DJANGO.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.DJANGO.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },

  Flask: {
    backgroundColor: SERVICES_ASSETS.FLASK.color,
    text: SERVICES_ASSETS.FLASK.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.FLASK.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'aws.lambda.name', default: '-' },
    },
  },

  Fastapi: {
    backgroundColor: SERVICES_ASSETS.FASTAPI.color,
    text: SERVICES_ASSETS.FASTAPI.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.FASTAPI.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },

  Tornado: {
    backgroundColor: SERVICES_ASSETS.TORNADO.color,
    text: SERVICES_ASSETS.TORNADO.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.TORNADO.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },

  Hapi: {
    backgroundColor: SERVICES_ASSETS.HAPI.color,
    text: SERVICES_ASSETS.HAPI.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.HAPI.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },

  Koa: {
    backgroundColor: SERVICES_ASSETS.KOA.color,
    text: SERVICES_ASSETS.KOA.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.KOA.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },

  Express: {
    backgroundColor: SERVICES_ASSETS.EXPRESS.color,
    text: SERVICES_ASSETS.EXPRESS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.EXPRESS.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  ASPCore: {
    backgroundColor: SERVICES_ASSETS.ASPCORE.color,
    text: SERVICES_ASSETS.ASPCORE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.ASPCORE.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Kafka: {
    backgroundColor: SERVICES_ASSETS.KAFKA.color,
    text: SERVICES_ASSETS.KAFKA.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.KAFKA.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  RDB: {
    backgroundColor: SERVICES_ASSETS.RDB.color,
    text: SERVICES_ASSETS.RDB.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.RDB.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'operation.type', default: '-' },
    },
  },
  POSTGRESQL: {
    backgroundColor: SERVICES_ASSETS.POSTGRESQL.color,
    text: SERVICES_ASSETS.POSTGRESQL.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.POSTGRESQL.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['db.statement.type', 'db.instance'], join: ' / ', default: '-' },
    },
  },
  PG: {
    // TODO: why we need this?
    backgroundColor: SERVICES_ASSETS.POSTGRESQL.color,
    text: SERVICES_ASSETS.POSTGRESQL.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.POSTGRESQL.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'operation.type', default: '-' },
    },
  },
  MYSQL: {
    backgroundColor: SERVICES_ASSETS.MYSQL.color,
    text: SERVICES_ASSETS.MYSQL.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.MYSQL.text },
      // TODO: There was a bug, so that we might want to add : to the end of db.statement.type:
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['db.statement.type', 'db.instance'], join: ' / ', default: '-' },
    },
  },
  H2: {
    backgroundColor: SERVICES_ASSETS.H2.color,
    text: SERVICES_ASSETS.H2.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.H2.text },
      // TODO: There was a bug, so that we might want to add : to the end of db.statement.type:
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['db.statement.type', 'db.instance'], join: ' / ', default: '-' },
    },
  },
  SQLITE: {
    backgroundColor: SERVICES_ASSETS.SQLITE.color,
    text: SERVICES_ASSETS.SQLITE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.SQLITE.text },
      // TODO: There was a bug, so that we might want to add : to the end of db.statement.type:
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['db.statement.type', 'db.instance'], join: ' / ', default: '-' },
    },
  },
  MONGODB: {
    backgroundColor: SERVICES_ASSETS.MONGODB.color,
    text: SERVICES_ASSETS.MONGODB.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'tag-prop', val: 'db.type', default: SERVICES_ASSETS.MONGODB.text },
      smallTitleCmd: {
        cmd: 'tag-prop-arr',
        val: ['mongodb.command.name', 'db.instance', 'mongodb.collection.name'],
        join: ' / ',
        default: '-',
      },
    },
  },
  Redis: {
    backgroundColor: SERVICES_ASSETS.REDIS.color,
    text: SERVICES_ASSETS.REDIS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.REDIS.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'redis.command.type', default: '-' },
    },
  },
  TestContainers: {
    backgroundColor: SERVICES_ASSETS.TESTCONTAINERS.color,
    text: SERVICES_ASSETS.TESTCONTAINERS.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.TESTCONTAINERS.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Hazelcast: {
    backgroundColor: SERVICES_ASSETS.HAZELCAST.color,
    text: SERVICES_ASSETS.HAZELCAST.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.HAZELCAST.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  HTTP: {
    backgroundColor: SERVICES_ASSETS.HTTP.color,
    text: SERVICES_ASSETS.HTTP.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.HTTP.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Auth0: {
    backgroundColor: SERVICES_ASSETS.AUTH0.color,
    text: SERVICES_ASSETS.AUTH0.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.AUTH0.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Google: {
    backgroundColor: SERVICES_ASSETS.GOOGLE.color,
    text: SERVICES_ASSETS.GOOGLE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.GOOGLE.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Slack: {
    backgroundColor: SERVICES_ASSETS.SLACK.color,
    text: SERVICES_ASSETS.SLACK.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.SLACK.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Stripe: {
    backgroundColor: SERVICES_ASSETS.STRIPE.color,
    text: SERVICES_ASSETS.SLACK.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.STRIPE.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Twilio: {
    backgroundColor: SERVICES_ASSETS.TWILIO.color,
    text: SERVICES_ASSETS.TWILIO.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.TWILIO.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Mailgun: {
    backgroundColor: SERVICES_ASSETS.MAILGUN.color,
    text: SERVICES_ASSETS.MAILGUN.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.MAILGUN.text },
      smallTitleCmd: { cmd: 'tag-prop-arr', val: ['http.method', 'http.path'], join: ' ', default: '-' },
    },
  },
  Docker: {
    backgroundColor: SERVICES_ASSETS.DOCKER.color,
    text: SERVICES_ASSETS.DOCKER.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.DOCKER.text },
      smallTitleCmd: { cmd: 'tag-prop', val: 'docker.cmd.name', default: '-' },
    },
  },
  'Node-Handler': {
    backgroundColor: SERVICES_ASSETS.NODE_HANDLER.color,
    text: SERVICES_ASSETS.NODE_HANDLER.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.NODE_HANDLER.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  'Nodejs-Module-Load': {
    backgroundColor: SERVICES_ASSETS.NODEJS_MODULE_LOAD.color,
    text: SERVICES_ASSETS.NODEJS_MODULE_LOAD.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.NODEJS_MODULE_LOAD.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  'AWS-Lambda-Init': {
    backgroundColor: SERVICES_ASSETS.AWS_LAMBDA_INIT.color,
    text: SERVICES_ASSETS.AWS_LAMBDA_INIT.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.AWS_LAMBDA_INIT.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  'Google-PubSub': {
    backgroundColor: SERVICES_ASSETS.GCP_PUBSUB.color,
    text: SERVICES_ASSETS.GCP_PUBSUB.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.GCP_PUBSUB.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  'Google-PubSub-Node-Handler': {
    backgroundColor: SERVICES_ASSETS.GOOGLE_PUBSUB_NODE_HANDLER.color,
    text: SERVICES_ASSETS.GOOGLE_PUBSUB_NODE_HANDLER.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.GOOGLE_PUBSUB_NODE_HANDLER.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  'Google-BigQuery': {
    backgroundColor: SERVICES_ASSETS.GCP_BIGQUERY.color,
    text: SERVICES_ASSETS.GCP_BIGQUERY.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.GCP_BIGQUERY.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Method: {
    backgroundColor: SERVICES_ASSETS.METHOD.color,
    text: SERVICES_ASSETS.METHOD.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.METHOD.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Line: {
    backgroundColor: SERVICES_ASSETS.LINE.color,
    text: SERVICES_ASSETS.LINE.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.LINE.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  Func: {
    backgroundColor: SERVICES_ASSETS.FUNC.color,
    text: SERVICES_ASSETS.FUNC.text,
    textClipCode: {
      bigTitleCmd: { cmd: 'static', val: SERVICES_ASSETS.FUNC.text },
      smallTitleCmd: { cmd: 'operation' },
    },
  },
  SpanDetail: {},
};
