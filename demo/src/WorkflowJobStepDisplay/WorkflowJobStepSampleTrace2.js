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

export function getWorkflowJobStepData2() {
  let trace = [
    {
      traceId: '49791812-b9b3-34ed-b213-05c64ee58ad5_traceId',
      parentId: '',
      id: 'workflowId_49791812-b9b3-34ed-b213-05c64ee58ad5',
      name: '00:23',
      timestamp: 1677168613000,
      duration: 23000,
      serviceName: 'Lab Windows WorkflowKit/TestKit Action',
      markerColor: WORKFLOW.markerColor,
      color: WORKFLOW.color,
      criticalPathColor: WORKFLOW.criticalPathColor,
      criticalPathHeight: SPAN.criticalPathHeight,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.errorIcon,
    },
    {
      traceId: '49791812-b9b3-34ed-b213-05c64ee58ad5_traceId',
      parentId: 'workflowId_49791812-b9b3-34ed-b213-05c64ee58ad5',
      id: 'jobId_11553612988',
      name: '<1s',
      timestamp: 1677168634000,
      duration: 0,
      serviceName: 'build maven demo with|pipe',
      markerColor: JOB.markerColor,
      color: JOB.color,
      criticalPathColor: JOB.criticalPathColor,
      criticalPathHeight: SPAN.criticalPathHeight,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '49791812-b9b3-34ed-b213-05c64ee58ad5_traceId',
      parentId: 'jobId_11553612988',
      id: 'jobId_11553612988_stepId_1',
      name: '00:01',
      timestamp: 1677168633000,
      duration: 1000,
      serviceName: 'Set up job',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
  ];

  trace.forEach(el => (el.name = formatDuration(el.duration)));
  return trace;
}

export function getWorkflowJobStepDataDetails2() {
  const tracesArr = getWorkflowJobStepData2();

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
