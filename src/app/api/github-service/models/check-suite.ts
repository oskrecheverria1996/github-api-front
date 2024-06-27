/* tslint:disable */
/* eslint-disable */
import { MinimalRepository } from '../models/minimal-repository';
import { NullableIntegration } from '../models/nullable-integration';
import { PullRequestMinimal } from '../models/pull-request-minimal';
import { SimpleCommit } from '../models/simple-commit';

/**
 * A suite of checks performed on the code of a given code change
 */
export interface CheckSuite {
  after: string | null;
  app: NullableIntegration | null;
  before: string | null;
  check_runs_url: string;
  conclusion: 'success' | 'failure' | 'neutral' | 'cancelled' | 'skipped' | 'timed_out' | 'action_required' | 'startup_failure' | 'stale' | 'null';
  created_at: string | null;
  head_branch: string | null;
  head_commit: SimpleCommit;

  /**
   * The SHA of the head commit that is being checked.
   */
  head_sha: string;
  id: number;
  latest_check_runs_count: number;
  node_id: string;
  pull_requests: Array<PullRequestMinimal> | null;
  repository: MinimalRepository;
  rerequestable?: boolean;
  runs_rerequestable?: boolean;

  /**
   * The phase of the lifecycle that the check suite is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check suites.
   */
  status: ('queued' | 'in_progress' | 'completed' | 'waiting' | 'requested' | 'pending') | null;
  updated_at: string | null;
  url: string | null;
}
