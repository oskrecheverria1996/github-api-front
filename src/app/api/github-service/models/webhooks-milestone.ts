/* tslint:disable */
/* eslint-disable */

/**
 * A collection of related issues and pull requests.
 */
export interface WebhooksMilestone {
  closed_at: string | null;
  closed_issues: number;
  created_at: string;
  creator: {
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
  description: string | null;
  due_on: string | null;
  html_url: string;
  id: number;
  labels_url: string;
  node_id: string;

  /**
   * The number of the milestone.
   */
  number: number;
  open_issues: number;

  /**
   * The state of the milestone.
   */
  state: 'open' | 'closed';

  /**
   * The title of the milestone.
   */
  title: string;
  updated_at: string;
  url: string;
}
