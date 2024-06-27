/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Milestoned Issue Event
 */
export interface MilestonedIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  milestone: {
'title': string;
};
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  url: string;
}
