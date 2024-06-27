/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { NullableRepositoryWebhooks } from '../models/nullable-repository-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksProject } from '../models/webhooks-project';
export interface WebhookProjectDeleted {
  action: 'deleted';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  project: WebhooksProject;
  repository?: NullableRepositoryWebhooks | null;
  sender?: SimpleUserWebhooks;
}
