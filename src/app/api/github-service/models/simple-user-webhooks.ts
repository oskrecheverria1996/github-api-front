/* tslint:disable */
/* eslint-disable */

/**
 * The GitHub user that triggered the event. This property is included in every webhook payload.
 */
export interface SimpleUserWebhooks {
  avatar_url: string;
  email?: string | null;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  html_url: string;
  id: number;
  login: string;
  name?: string | null;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_at?: string;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}
