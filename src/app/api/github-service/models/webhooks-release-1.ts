/* tslint:disable */
/* eslint-disable */

/**
 * The [release](https://docs.github.com/rest/releases/releases/#get-a-release) object.
 */
export interface WebhooksRelease1 {
  assets: Array<{
'browser_download_url': string;
'content_type': string;
'created_at': string;
'download_count': number;
'id': number;
'label': string | null;

/**
 * The file name of the asset.
 */
'name': string;
'node_id': string;
'size': number;

/**
 * State of the release asset.
 */
'state': 'uploaded';
'updated_at': string;
'uploader'?: {
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
'url': string;
}>;
  assets_url: string;
  author: {
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
  body: string | null;
  created_at: string | null;
  discussion_url?: string;

  /**
   * Whether the release is a draft or published
   */
  draft: boolean;
  html_url: string;
  id: number;
  name: string | null;
  node_id: string;

  /**
   * Whether the release is identified as a prerelease or a full release.
   */
  prerelease: boolean;
  published_at: string | null;
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

  /**
   * The name of the tag.
   */
  tag_name: string;
  tarball_url: string | null;

  /**
   * Specifies the commitish value that determines where the Git tag is created from.
   */
  target_commitish: string;
  upload_url: string;
  url: string;
  zipball_url: string | null;
}
