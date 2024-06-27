/* tslint:disable */
/* eslint-disable */
import { Discussion } from '../models/discussion';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksAnswer } from '../models/webhooks-answer';
export interface WebhookDiscussionUnanswered {
  action: 'unanswered';
  discussion: Discussion;
  old_answer: WebhooksAnswer;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
