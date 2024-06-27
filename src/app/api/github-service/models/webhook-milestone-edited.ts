/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksMilestone } from '../models/webhooks-milestone';
export interface WebhookMilestoneEdited {
  action: 'edited';

  /**
   * The changes to the milestone if the action was `edited`.
   */
  changes: {
'description'?: {

/**
 * The previous version of the description if the action was `edited`.
 */
'from': string;
};
'due_on'?: {

/**
 * The previous version of the due date if the action was `edited`.
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
  milestone: WebhooksMilestone;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
