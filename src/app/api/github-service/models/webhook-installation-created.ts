/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { Installation } from '../models/installation';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksRepositories } from '../models/webhooks-repositories';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookInstallationCreated {
  action: 'created';
  enterprise?: EnterpriseWebhooks;
  installation: Installation;
  organization?: OrganizationSimpleWebhooks;
  repositories?: WebhooksRepositories;
  repository?: RepositoryWebhooks;
  requester?: WebhooksUser | null;
  sender: SimpleUserWebhooks;
}
