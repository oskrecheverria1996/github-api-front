/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksIssue2 } from '../models/webhooks-issue-2';
export interface WebhookIssuesUnpinned {
  action: 'unpinned';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  issue: WebhooksIssue2;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
