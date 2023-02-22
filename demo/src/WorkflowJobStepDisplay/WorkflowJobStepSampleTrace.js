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

export function getWorkflowJobStepData() {
  let trace = [
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: '',
      id: 'workflowId_6783054d-7e21-39c8-ad49-0e0c814e1c03',
      name: 'Lab Alexa WorkflowKit/TestKit Action',
      timestamp: 1675923491000,
      duration: 62000,
      serviceName: 'Lab Alexa WorkflowKit/TestKit Action',
      markerColor: WORKFLOW.markerColor,
      color: WORKFLOW.color,
      criticalPathColor: WORKFLOW.criticalPathColor,
      criticalPathHeight: SPAN.criticalPathHeight,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.errorIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'workflowId_6783054d-7e21-39c8-ad49-0e0c814e1c03',
      id: 'jobId_11216525152',
      name: 'build maven demo with|pipe',
      timestamp: 1675923497000,
      duration: 54000,
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
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_1',
      name: 'Set up job',
      timestamp: 1675923497000,
      duration: 2000,
      serviceName: 'Set up job',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_2',
      name: 'Collect Workflow Telemetry',
      timestamp: 1675923499000,
      duration: 1000,
      serviceName: 'Collect Workflow Telemetry',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.errorIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_3',
      name: 'Run actions/checkout@v3',
      timestamp: 1675923501000,
      duration: 0,
      serviceName: 'Run actions/checkout@v3',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_4',
      name: 'Set up JDK 11',
      timestamp: 1675923501000,
      duration: 1000,
      serviceName: 'Set up JDK 11',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_5',
      name: 'Build with Maven',
      timestamp: 1675923502000,
      duration: 34000,
      serviceName: 'Build with Maven',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_6',
      name: 'Analyze Test and/or Coverage Results',
      timestamp: 1675923537000,
      duration: 11000,
      serviceName: 'Analyze Test and/or Coverage Results',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_10',
      name: 'Post Set up JDK 11',
      timestamp: 1675923548000,
      duration: 1000,
      serviceName: 'Post Set up JDK 11',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_11',
      name: 'Post Run actions/checkout@v3',
      timestamp: 1675923549000,
      duration: 0,
      serviceName: 'Post Run actions/checkout@v3',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_12',
      name: 'Post Collect Workflow Telemetry',
      timestamp: 1675923549000,
      duration: 1000,
      serviceName: 'Post Collect Workflow Telemetry',
      type: 'step',
      markerColor: STEP.markerColor,
      color: STEP.color,
      borderRadius: SPAN.borderRadius,
      height: SPAN.height,
      icon: ICON.successIcon,
    },
    {
      traceId: '6783054d-7e21-39c8-ad49-0e0c814e1c03_traceId',
      parentId: 'jobId_11216525152',
      id: 'jobId_11216525152_stepId_13',
      name: 'Complete job',
      timestamp: 1675923550000,
      duration: 0,
      serviceName: 'Complete job',
      type: 'step',
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

export function getWorkflowJobStepDataDetails() {
  const tracesArr = getWorkflowJobStepData();

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
