/* tslint:disable */
/* eslint-disable */

/**
 * The review that was affected.
 */
export interface WebhooksReview {
  '_links': {
'html': {
'href': string;
};
'pull_request': {
'href': string;
};
};

  /**
   * How the author is associated with the repository.
   */
  author_association: 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

  /**
   * The text of the review.
   */
  body: string | null;

  /**
   * A commit SHA for the review.
   */
  commit_id: string;
  html_url: string;

  /**
   * Unique identifier of the review
   */
  id: number;
  node_id: string;
  pull_request_url: string;
  state: string;
  submitted_at: string | null;
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
