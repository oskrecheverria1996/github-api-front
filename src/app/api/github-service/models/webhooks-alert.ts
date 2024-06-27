/* tslint:disable */
/* eslint-disable */

/**
 * The security alert of the vulnerable dependency.
 */
export interface WebhooksAlert {
  affected_package_name: string;
  affected_range: string;
  created_at: string;
  dismiss_reason?: string;
  dismissed_at?: string;
  dismisser?: {
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
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
  external_identifier: string;
  external_reference: string | null;
  fix_reason?: string;
  fixed_at?: string;
  fixed_in?: string;
  ghsa_id: string;
  id: number;
  node_id: string;
  number: number;
  severity: string;
  state: 'open';
}
