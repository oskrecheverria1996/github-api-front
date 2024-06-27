/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksLabel } from '../models/webhooks-label';
export interface WebhookLabelCreated {
  action: 'created';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  label: WebhooksLabel;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
