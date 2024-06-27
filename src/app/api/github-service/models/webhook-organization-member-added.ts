/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksMembership } from '../models/webhooks-membership';
export interface WebhookOrganizationMemberAdded {
  action: 'member_added';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  membership: WebhooksMembership;
  organization: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
