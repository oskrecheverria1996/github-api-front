/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryAdvisory } from '../models/repository-advisory';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookRepositoryAdvisoryReported {
  action: 'reported';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  repository_advisory: RepositoryAdvisory;
  sender?: SimpleUserWebhooks;
}
