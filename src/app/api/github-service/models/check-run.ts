/* tslint:disable */
/* eslint-disable */
import { DeploymentSimple } from '../models/deployment-simple';
import { NullableIntegration } from '../models/nullable-integration';
import { PullRequestMinimal } from '../models/pull-request-minimal';

/**
 * A check performed on the code of a given code change
 */
export interface CheckRun {
  app: NullableIntegration | null;
  check_suite: ({
'id': number;
}) | null;
  completed_at: string | null;
  conclusion: ('success' | 'failure' | 'neutral' | 'cancelled' | 'skipped' | 'timed_out' | 'action_required') | null;
  deployment?: DeploymentSimple;
  details_url: string | null;
  external_id: string | null;

  /**
   * The SHA of the commit that is being checked.
   */
  head_sha: string;
  html_url: string | null;

  /**
   * The id of the check.
   */
  id: number;

  /**
   * The name of the check.
   */
  name: string;
  node_id: string;
  output: {
'title': string | null;
'summary': string | null;
'text': string | null;
'annotations_count': number;
'annotations_url': string;
};

  /**
   * Pull requests that are open with a `head_sha` or `head_branch` that matches the check. The returned pull requests do not necessarily indicate pull requests that triggered the check.
   */
  pull_requests: Array<PullRequestMinimal>;
  started_at: string | null;

  /**
   * The phase of the lifecycle that the check is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check runs.
   */
  status: 'queued' | 'in_progress' | 'completed' | 'waiting' | 'requested' | 'pending';
  url: string;
}
