/* tslint:disable */
/* eslint-disable */
import { Integration } from '../models/integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Assigned Issue Event
 */
export interface AssignedIssueEvent {
  actor: SimpleUser;
  assignee: SimpleUser;
  assigner: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  node_id: string;
  performed_via_github_app: Integration | null;
  url: string;
}
