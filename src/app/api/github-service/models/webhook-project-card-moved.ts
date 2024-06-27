/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookProjectCardMoved {
  action: 'moved';
  changes?: {
'column_id': {
'from': number;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  project_card: {
'after_id'?: number | null;

/**
 * Whether or not the card is archived
 */
'archived': boolean;
'column_id': number;
'column_url': string;
'content_url'?: string;
'created_at': string;
'creator': {
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
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};

/**
 * The project card's ID
 */
'id': number;
'node_id': string;
'note': string | null;
'project_url': string;
'updated_at': string;
'url': string;
} & {
'after_id': number | null;
'archived'?: boolean;
'column_id'?: number;
'column_url'?: string;
'created_at'?: string;
'creator'?: ({
'avatar_url'?: string;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'url'?: string;
}) | null;
'id'?: number;
'node_id'?: string;
'note'?: string | null;
'project_url'?: string;
'updated_at'?: string;
'url'?: string;
};
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
