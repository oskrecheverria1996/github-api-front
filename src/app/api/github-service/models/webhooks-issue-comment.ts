/* tslint:disable */
/* eslint-disable */
import { Integration } from '../models/integration';

/**
 * The [comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment) itself.
 */
export interface WebhooksIssueComment {

  /**
   * How the author is associated with the repository.
   */
  author_association: 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

  /**
   * Contents of the issue comment
   */
  body: string;
  created_at: string;
  html_url: string;

  /**
   * Unique identifier of the issue comment
   */
  id: number;
  issue_url: string;
  node_id: string;
  performed_via_github_app: Integration | null;
  reactions: {
'+1': number;
'-1': number;
'confused': number;
'eyes': number;
'heart': number;
'hooray': number;
'laugh': number;
'rocket': number;
'total_count': number;
'url': string;
};
  updated_at: string;

  /**
   * URL for the issue comment
   */
  url: string;
  user: {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};
}
