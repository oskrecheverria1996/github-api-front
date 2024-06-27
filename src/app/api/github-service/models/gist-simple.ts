/* tslint:disable */
/* eslint-disable */
import { GistHistory } from '../models/gist-history';
import { NullableSimpleUser } from '../models/nullable-simple-user';
import { PublicUser } from '../models/public-user';
import { SimpleUser } from '../models/simple-user';

/**
 * Gist Simple
 */
export interface GistSimple {
  comments?: number;
  comments_url?: string;
  commits_url?: string;
  created_at?: string;
  description?: string | null;
  files?: {
[key: string]: ({
'filename'?: string;
'type'?: string;
'language'?: string;
'raw_url'?: string;
'size'?: number;
'truncated'?: boolean;
'content'?: string;
}) | null;
};

  /**
   * Gist
   */
  fork_of?: {
'url': string;
'forks_url': string;
'commits_url': string;
'id': string;
'node_id': string;
'git_pull_url': string;
'git_push_url': string;
'html_url': string;
'files': {
[key: string]: {
'filename'?: string;
'type'?: string;
'language'?: string;
'raw_url'?: string;
'size'?: number;
};
};
'public': boolean;
'created_at': string;
'updated_at': string;
'description': string | null;
'comments': number;
'user': NullableSimpleUser | null;
'comments_url': string;
'owner'?: NullableSimpleUser | null;
'truncated'?: boolean;
'forks'?: Array<any>;
'history'?: Array<any>;
};
  /** @deprecated */forks?: (Array<{
'id'?: string;
'url'?: string;
'user'?: PublicUser;
'created_at'?: string;
'updated_at'?: string;
}>) | null;
  forks_url?: string;
  git_pull_url?: string;
  git_push_url?: string;
  /** @deprecated */history?: Array<GistHistory> | null;
  html_url?: string;
  id?: string;
  node_id?: string;
  owner?: SimpleUser;
  public?: boolean;
  truncated?: boolean;
  updated_at?: string;
  url?: string;
  user?: string | null;
}
