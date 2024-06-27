/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookWorkflowDispatch {
  enterprise?: EnterpriseWebhooks;
  inputs: ({
[key: string]: any;
}) | null;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  ref: string;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  workflow: string;
}
