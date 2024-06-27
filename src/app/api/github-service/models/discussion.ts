/* tslint:disable */
/* eslint-disable */

/**
 * A Discussion in a repository.
 */
export interface Discussion {
  active_lock_reason: string | null;
  answer_chosen_at: string | null;
  answer_chosen_by: {
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
  answer_html_url: string | null;

  /**
   * How the author is associated with the repository.
   */
  author_association: 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';
  body: string;
  category: {
'created_at': string;
'description': string;
'emoji': string;
'id': number;
'is_answerable': boolean;
'name': string;
'node_id'?: string;
'repository_id': number;
'slug': string;
'updated_at': string;
};
  comments: number;
  created_at: string;
  html_url: string;
  id: number;
  locked: boolean;
  node_id: string;
  number: number;
  reactions?: {
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
  repository_url: string;

  /**
   * The current state of the discussion.
   * `converting` means that the discussion is being converted from an issue.
   * `transferring` means that the discussion is being transferred from another repository.
   */
  state: 'open' | 'closed' | 'locked' | 'converting' | 'transferring';

  /**
   * The reason for the current state
   */
  state_reason: ('resolved' | 'outdated' | 'duplicate' | 'reopened') | null;
  timeline_url?: string;
  title: string;
  updated_at: string;
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
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
}
