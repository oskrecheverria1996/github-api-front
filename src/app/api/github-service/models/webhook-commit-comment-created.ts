/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCommitCommentCreated {

  /**
   * The action performed. Can be `created`.
   */
  action: 'created';

  /**
   * The [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment) resource.
   */
  comment: {

/**
 * How the author is associated with the repository.
 */
'author_association': 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

/**
 * The text of the comment.
 */
'body': string;

/**
 * The SHA of the commit to which the comment applies.
 */
'commit_id': string;
'created_at': string;
'html_url': string;

/**
 * The ID of the commit comment.
 */
'id': number;

/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 */
'line': number | null;

/**
 * The node ID of the commit comment.
 */
'node_id': string;

/**
 * The relative path of the file to which the comment applies.
 */
'path': string | null;

/**
 * The line index in the diff to which the comment applies.
 */
'position': number | null;
'reactions'?: {
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
'updated_at': string;
'url': string;
'user': {
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
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
