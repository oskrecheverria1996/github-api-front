/* tslint:disable */
/* eslint-disable */

/**
 * The [comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request) itself.
 */
export interface WebhooksReviewComment {
  '_links': {
'html': {
'href': string;
};
'pull_request': {
'href': string;
};
'self': {
'href': string;
};
};

  /**
   * How the author is associated with the repository.
   */
  author_association: 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

  /**
   * The text of the comment.
   */
  body: string;

  /**
   * The SHA of the commit to which the comment applies.
   */
  commit_id: string;
  created_at: string;

  /**
   * The diff of the line that the comment refers to.
   */
  diff_hunk: string;

  /**
   * HTML URL for the pull request review comment.
   */
  html_url: string;

  /**
   * The ID of the pull request review comment.
   */
  id: number;

  /**
   * The comment ID to reply to.
   */
  in_reply_to_id?: number;

  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  line: number | null;

  /**
   * The node ID of the pull request review comment.
   */
  node_id: string;

  /**
   * The SHA of the original commit to which the comment applies.
   */
  original_commit_id: string;

  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  original_line: number;

  /**
   * The index of the original line in the diff to which the comment applies.
   */
  original_position: number;

  /**
   * The first line of the range for a multi-line comment.
   */
  original_start_line: number | null;

  /**
   * The relative path of the file to which the comment applies.
   */
  path: string;

  /**
   * The line index in the diff to which the comment applies.
   */
  position: number | null;

  /**
   * The ID of the pull request review to which the comment belongs.
   */
  pull_request_review_id: number | null;

  /**
   * URL for the pull request that the review comment belongs to.
   */
  pull_request_url: string;
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

  /**
   * The side of the first line of the range for a multi-line comment.
   */
  side: 'LEFT' | 'RIGHT';

  /**
   * The first line of the range for a multi-line comment.
   */
  start_line: number | null;

  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side: 'LEFT' | 'RIGHT' | 'null';

  /**
   * The level at which the comment is targeted, can be a diff line or a file.
   */
  subject_type?: 'line' | 'file';
  updated_at: string;

  /**
   * URL for the pull request review comment
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
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
}
