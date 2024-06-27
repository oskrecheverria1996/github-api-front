/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksSecurityAdvisory } from '../models/webhooks-security-advisory';
export interface WebhookSecurityAdvisoryUpdated {
  action: 'updated';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  security_advisory: WebhooksSecurityAdvisory;
  sender?: SimpleUserWebhooks;
}
