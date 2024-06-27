/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksIssue } from '../models/webhooks-issue';
import { WebhooksUserMannequin } from '../models/webhooks-user-mannequin';
export interface WebhookIssuesUnassigned {

  /**
   * The action that was performed.
   */
  action: 'unassigned';
  assignee?: WebhooksUserMannequin | null;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  issue: WebhooksIssue;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
