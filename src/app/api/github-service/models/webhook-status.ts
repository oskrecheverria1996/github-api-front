/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookStatus {
  avatar_url?: string | null;

  /**
   * An array of branch objects containing the status' SHA. Each branch contains the given SHA, but the SHA may or may not be the head of the branch. The array includes a maximum of 10 branches.
   */
  branches: Array<{
'commit': {
'sha': string | null;
'url': string | null;
};
'name': string;
'protected': boolean;
}>;
  commit: {
'author': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
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
'comments_url': string;
'commit': {
'author': {
'date'?: string;
'email': string | null;

/**
 * The git author's name.
 */
'name': string;
'username'?: string;
} & {
'date': string;
'email'?: string;
'name'?: string;
};
'comment_count': number;
'committer': {
'date'?: string;
'email': string | null;

/**
 * The git author's name.
 */
'name': string;
'username'?: string;
} & {
'date': string;
'email'?: string;
'name'?: string;
};
'message': string;
'tree': {
'sha': string;
'url': string;
};
'url': string;
'verification': {
'payload': string | null;
'reason': 'expired_key' | 'not_signing_key' | 'gpgverify_error' | 'gpgverify_unavailable' | 'unsigned' | 'unknown_signature_type' | 'no_user' | 'unverified_email' | 'bad_email' | 'unknown_key' | 'malformed_signature' | 'invalid' | 'valid' | 'bad_cert' | 'ocsp_pending';
'signature': string | null;
'verified': boolean;
};
};
'committer': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
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
'html_url': string;
'node_id': string;
'parents': Array<{
'html_url': string;
'sha': string;
'url': string;
}>;
'sha': string;
'url': string;
};
  context: string;
  created_at: string;

  /**
   * The optional human-readable description added to the status.
   */
  description: string | null;
  enterprise?: EnterpriseWebhooks;

  /**
   * The unique identifier of the status.
   */
  id: number;
  installation?: SimpleInstallation;
  name: string;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;

  /**
   * The Commit SHA.
   */
  sha: string;

  /**
   * The new state. Can be `pending`, `success`, `failure`, or `error`.
   */
  state: 'pending' | 'success' | 'failure' | 'error';

  /**
   * The optional link added to the status.
   */
  target_url: string | null;
  updated_at: string;
}
