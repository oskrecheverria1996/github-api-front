/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookInstallationTargetRenamed {
  account: {
'archived_at'?: string | null;
'avatar_url': string;
'created_at'?: string;
'description'?: any | null;
'events_url'?: string;
'followers'?: number;
'followers_url'?: string;
'following'?: number;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'has_organization_projects'?: boolean;
'has_repository_projects'?: boolean;
'hooks_url'?: string;
'html_url': string;
'id': number;
'is_verified'?: boolean;
'issues_url'?: string;
'login'?: string;
'members_url'?: string;
'name'?: string;
'node_id': string;
'organizations_url'?: string;
'public_gists'?: number;
'public_members_url'?: string;
'public_repos'?: number;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'slug'?: string;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'updated_at'?: string;
'url'?: string;
'website_url'?: any | null;
};
  action: 'renamed';
  changes: {
'login'?: {
'from': string;
};
'slug'?: {
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
  target_type: string;
}
