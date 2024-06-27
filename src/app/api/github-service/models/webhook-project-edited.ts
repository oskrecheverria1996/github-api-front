/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksProject } from '../models/webhooks-project';
export interface WebhookProjectEdited {
  action: 'edited';

  /**
   * The changes to the project if the action was `edited`.
   */
  changes?: {
'body'?: {

/**
 * The previous version of the body if the action was `edited`.
 */
'from': string;
};
'name'?: {

/**
 * The changes to the project if the action was `edited`.
 */
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  project: WebhooksProject;
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
