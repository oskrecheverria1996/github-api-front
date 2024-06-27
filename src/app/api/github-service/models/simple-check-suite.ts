/* tslint:disable */
/* eslint-disable */
import { Integration } from '../models/integration';
import { MinimalRepository } from '../models/minimal-repository';
import { PullRequestMinimal } from '../models/pull-request-minimal';

/**
 * A suite of checks performed on the code of a given code change
 */
export interface SimpleCheckSuite {
  after?: string | null;
  app?: Integration | null;
  before?: string | null;
  conclusion?: ('success' | 'failure' | 'neutral' | 'cancelled' | 'skipped' | 'timed_out' | 'action_required' | 'stale' | 'startup_failure') | null;
  created_at?: string;
  head_branch?: string | null;

  /**
   * The SHA of the head commit that is being checked.
   */
  head_sha?: string;
  id?: number;
  node_id?: string;
  pull_requests?: Array<PullRequestMinimal>;
  repository?: MinimalRepository;
  status?: 'queued' | 'in_progress' | 'completed' | 'pending' | 'waiting';
  updated_at?: string;
  url?: string;
}
