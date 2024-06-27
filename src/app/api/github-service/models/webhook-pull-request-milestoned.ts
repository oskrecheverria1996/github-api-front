/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { Milestone } from '../models/milestone';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksNumber } from '../models/webhooks-number';
import { WebhooksPullRequest5 } from '../models/webhooks-pull-request-5';
export interface WebhookPullRequestMilestoned {
  action: 'milestoned';
  enterprise?: EnterpriseWebhooks;
  milestone?: Milestone;
  number: WebhooksNumber;
  organization?: OrganizationSimpleWebhooks;
  pull_request: WebhooksPullRequest5;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
