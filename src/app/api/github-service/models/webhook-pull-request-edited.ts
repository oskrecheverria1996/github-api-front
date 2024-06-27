/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { PullRequestWebhook } from '../models/pull-request-webhook';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksNumber } from '../models/webhooks-number';
export interface WebhookPullRequestEdited {
  action: 'edited';

  /**
   * The changes to the comment if the action was `edited`.
   */
  changes: {
'base'?: {
'ref': {
'from': string;
};
'sha': {
'from': string;
};
};
'body'?: {

/**
 * The previous version of the body if the action was `edited`.
 */
'from': string;
};
'title'?: {

/**
 * The previous version of the title if the action was `edited`.
 */
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  number: WebhooksNumber;
  organization?: OrganizationSimpleWebhooks;
  pull_request: PullRequestWebhook;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
