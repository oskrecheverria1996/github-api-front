/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Renamed Issue Event
 */
export interface RenamedIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  rename: {
'from': string;
'to': string;
};
  url: string;
}
