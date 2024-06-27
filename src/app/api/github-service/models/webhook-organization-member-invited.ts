/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookOrganizationMemberInvited {
  action: 'member_invited';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;

  /**
   * The invitation for the user or email if the action is `member_invited`.
   */
  invitation: {
'created_at': string;
'email': string | null;
'failed_at': string | null;
'failed_reason': string | null;
'id': number;
'invitation_teams_url': string;
'inviter': {
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
'login': string | null;
'node_id': string;
'role': string;
'team_count': number;
'invitation_source'?: string;
};
  organization: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  user?: WebhooksUser | null;
}
