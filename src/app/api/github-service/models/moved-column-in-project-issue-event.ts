/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Moved Column in Project Issue Event
 */
export interface MovedColumnInProjectIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  project_card?: {
'id': number;
'url': string;
'project_id': number;
'project_url': string;
'column_name': string;
'previous_column_name'?: string;
};
  url: string;
}
