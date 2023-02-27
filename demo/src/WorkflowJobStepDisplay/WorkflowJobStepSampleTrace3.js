import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDuration } from '../../../src/DetailedTraceSummary/util/timestamp';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SPAN = {
  criticalPathHeight: '18px',
  borderRadius: '0px',
  height: '18px',
};

const WORKFLOW = {
  markerColor: '#F85149',
  color: '#F85149',
  criticalPathColor: '#622928',
};

const JOB = {
  markerColor: '#135CB8',
  color: '#135CB8',
  criticalPathColor: '#102D50',
};

const STEP = {
  markerColor: '#A9D7FF',
  color: '#A9D7FF',
};

const ICON = {
  errorIcon: (
    <span
      style={{
        marginLeft: 12,
        marginRight: 4,
        marginTop: 2,
        width: 18,
        display: 'inline-block',
      }}
    >
      <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#F85149', fontSize: 16 }} />
    </span>
  ),
  successIcon: (
    <span
      style={{
        marginLeft: 12,
        marginRight: 4,
        marginTop: 2,
        width: 18,
        display: 'inline-block',
      }}
    >
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#238636', fontSize: 16 }} />
    </span>
  ),
};

export function getWorkflowJobStepData3() {
  let trace = [
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: '',
      id: 'workflowId_9ade4462-89db-3a64-a692-6f031dba848f',
      name: '00:26',
      timestamp: 1677244869000,
      duration: 26000,
      serviceName: 'Lab WorkflowKit/TestKit Flaky',
      type: 'workflow',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'workflowId_9ade4462-89db-3a64-a692-6f031dba848f',
      id: 'jobId_11576959935',
      name: '00:16',
      timestamp: 1677244877000,
      duration: 16000,
      serviceName: 'build maven demo with|pipe',
      type: 'job',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_1',
      name: '00:02',
      timestamp: 1677244876000,
      duration: 2000,
      serviceName: 'Set up job',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_2',
      name: '00:01',
      timestamp: 1677244878000,
      duration: 1000,
      serviceName: 'Collect Workflow Telemetry',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_3',
      name: '<1s',
      timestamp: 1677244880000,
      duration: 0,
      serviceName: 'Run actions/checkout@v3',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_4',
      name: '00:01',
      timestamp: 1677244880000,
      duration: 1000,
      serviceName: 'Set up JDK 11',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_5',
      name: '00:04',
      timestamp: 1677244882000,
      duration: 4000,
      serviceName: 'Build with Maven',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_6',
      name: '00:04',
      timestamp: 1677244886000,
      duration: 4000,
      serviceName: 'Analyze Test and/or Coverage Results',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_10',
      name: '<1s',
      timestamp: 1677244890000,
      duration: 0,
      serviceName: 'Post Set up JDK 11',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_11',
      name: '<1s',
      timestamp: 1677244891000,
      duration: 0,
      serviceName: 'Post Run actions/checkout@v3',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_12',
      name: '00:01',
      timestamp: 1677244891000,
      duration: 1000,
      serviceName: 'Post Collect Workflow Telemetry',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
    {
      traceId: '9ade4462-89db-3a64-a692-6f031dba848f_traceId',
      parentId: 'jobId_11576959935',
      id: 'jobId_11576959935_stepId_13',
      name: '<1s',
      timestamp: 1677244892000,
      duration: 0,
      serviceName: 'Complete job',
      type: 'step',
      markerColor: '#238636',
      color: '#4367FD',
      criticalPathColor: '#ffffff',
    },
  ];

  trace.forEach(el => (el.name = formatDuration(el.duration)));
  return trace;
}

export function getWorkflowJobStepDataDetails3() {
  const tracesArr = getWorkflowJobStepData3();

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
