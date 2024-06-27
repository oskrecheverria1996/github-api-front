/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Locked Issue Event
 */
export interface LockedIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  lock_reason: string | null;
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  url: string;
}
