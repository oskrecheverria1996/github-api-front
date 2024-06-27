/* tslint:disable */
/* eslint-disable */
import { Deployment } from '../models/deployment';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookWorkflowJobInProgress {
  action: 'in_progress';
  deployment?: Deployment;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  workflow_job: {
'check_run_url': string;
'completed_at': string | null;
'conclusion': 'success' | 'failure' | 'null' | 'cancelled' | 'neutral';

/**
 * The time that the job created.
 */
'created_at': string;
'head_sha': string;
'html_url': string;
'id': number;

/**
 * Custom labels for the job. Specified by the [`"runs-on"` attribute](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) in the workflow YAML.
 */
'labels': Array<string>;
'name': string;
'node_id': string;
'run_attempt': number;
'run_id': number;
'run_url': string;

/**
 * The ID of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
 */
'runner_group_id': number | null;

/**
 * The name of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
 */
'runner_group_name': string | null;

/**
 * The ID of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
 */
'runner_id': number | null;

/**
 * The name of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
 */
'runner_name': string | null;
'started_at': string;

/**
 * The current status of the job. Can be `queued`, `in_progress`, or `completed`.
 */
'status': 'queued' | 'in_progress' | 'completed';

/**
 * The name of the current branch.
 */
'head_branch': string | null;

/**
 * The name of the workflow.
 */
'workflow_name': string | null;
'steps': Array<{
'completed_at': string | null;
'conclusion': 'failure' | 'skipped' | 'success' | 'null' | 'cancelled';
'name': string;
'number': number;
'started_at': string | null;
'status': 'in_progress' | 'completed' | 'queued' | 'pending';
}>;
'url': string;
} & {
'check_run_url'?: string;
'completed_at'?: string | null;
'conclusion'?: string | null;

/**
 * The time that the job created.
 */
'created_at'?: string;
'head_sha'?: string;
'html_url'?: string;
'id'?: number;
'labels'?: Array<string>;
'name'?: string;
'node_id'?: string;
'run_attempt'?: number;
'run_id'?: number;
'run_url'?: string;
'runner_group_id'?: number | null;
'runner_group_name'?: string | null;
'runner_id'?: number | null;
'runner_name'?: string | null;
'started_at'?: string;
'status': 'in_progress' | 'completed' | 'queued';

/**
 * The name of the current branch.
 */
'head_branch'?: string | null;

/**
 * The name of the workflow.
 */
'workflow_name'?: string | null;
'steps': Array<{
'completed_at': string | null;
'conclusion': string | null;
'name': string;
'number': number;
'started_at': string | null;
'status': 'in_progress' | 'completed' | 'pending' | 'queued';
}>;
'url'?: string;
};
}
