/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookOrgBlockUnblocked {
  action: 'unblocked';
  blocked_user: WebhooksUser | null;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
