/* tslint:disable */
/* eslint-disable */
import { DeploymentSimple } from '../models/deployment-simple';
import { NullableIntegration } from '../models/nullable-integration';
import { PullRequestMinimal } from '../models/pull-request-minimal';
import { SimpleCheckSuite } from '../models/simple-check-suite';

/**
 * A check performed on the code of a given code change
 */
export interface CheckRunWithSimpleCheckSuite {
  app: NullableIntegration | null;
  check_suite: SimpleCheckSuite;
  completed_at: string | null;
  conclusion: ('waiting' | 'pending' | 'startup_failure' | 'stale' | 'success' | 'failure' | 'neutral' | 'cancelled' | 'skipped' | 'timed_out' | 'action_required') | null;
  deployment?: DeploymentSimple;
  details_url: string;
  external_id: string;

  /**
   * The SHA of the commit that is being checked.
   */
  head_sha: string;
  html_url: string;

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
'annotations_count': number;
'annotations_url': string;
'summary': string | null;
'text': string | null;
'title': string | null;
};
  pull_requests: Array<PullRequestMinimal>;
  started_at: string;

  /**
   * The phase of the lifecycle that the check is currently in.
   */
  status: 'queued' | 'in_progress' | 'completed' | 'pending';
  url: string;
}
