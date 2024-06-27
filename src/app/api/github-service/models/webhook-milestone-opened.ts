/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksMilestone3 } from '../models/webhooks-milestone-3';
export interface WebhookMilestoneOpened {
  action: 'opened';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  milestone: WebhooksMilestone3;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
