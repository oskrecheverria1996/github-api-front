/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { PullRequestWebhook } from '../models/pull-request-webhook';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksNumber } from '../models/webhooks-number';
export interface WebhookPullRequestReopened {
  action: 'reopened';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  number: WebhooksNumber;
  organization?: OrganizationSimpleWebhooks;
  pull_request: PullRequestWebhook;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
