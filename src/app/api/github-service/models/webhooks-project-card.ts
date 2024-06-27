/* tslint:disable */
/* eslint-disable */
export interface WebhooksProjectCard {
  after_id?: number | null;

  /**
   * Whether or not the card is archived
   */
  archived: boolean;
  column_id: number;
  column_url: string;
  content_url?: string;
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
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};

  /**
   * The project card's ID
   */
  id: number;
  node_id: string;
  note: string | null;
  project_url: string;
  updated_at: string;
  url: string;
}
