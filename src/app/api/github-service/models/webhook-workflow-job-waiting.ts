/* tslint:disable */
/* eslint-disable */
import { Deployment } from '../models/deployment';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookWorkflowJobWaiting {
  action: 'waiting';
  deployment?: Deployment;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  workflow_job: {
'check_run_url': string;
'completed_at': string | null;
'conclusion': string | null;

/**
 * The time that the job created.
 */
'created_at': string;
'head_sha': string;
'html_url': string;
'id': number;
'labels': Array<string>;
'name': string;
'node_id': string;
'run_attempt': number;
'run_id': number;
'run_url': string;
'runner_group_id': number | null;
'runner_group_name': string | null;
'runner_id': number | null;
'runner_name': string | null;
'started_at': string;

/**
 * The name of the current branch.
 */
'head_branch': string | null;

/**
 * The name of the workflow.
 */
'workflow_name': string | null;
'status': 'queued' | 'in_progress' | 'completed' | 'waiting';
'steps': Array<{
'completed_at': string | null;
'conclusion': 'failure' | 'skipped' | 'success' | 'cancelled' | 'null';
'name': string;
'number': number;
'started_at': string | null;
'status': 'completed' | 'in_progress' | 'queued' | 'pending' | 'waiting';
}>;
'url': string;
};
}
