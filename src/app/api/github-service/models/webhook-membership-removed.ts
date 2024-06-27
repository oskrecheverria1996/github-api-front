/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { WebhooksTeam } from '../models/webhooks-team';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookMembershipRemoved {
  action: 'removed';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  member: WebhooksUser | null;
  organization: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;

  /**
   * The scope of the membership. Currently, can only be `team`.
   */
  scope: 'team' | 'organization';
  sender: {
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
  team: WebhooksTeam;
}
