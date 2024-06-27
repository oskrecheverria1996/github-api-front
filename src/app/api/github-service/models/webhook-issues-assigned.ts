/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksIssue } from '../models/webhooks-issue';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookIssuesAssigned {

  /**
   * The action that was performed.
   */
  action: 'assigned';
  assignee?: WebhooksUser | null;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  issue: WebhooksIssue;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
