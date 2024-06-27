/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksLabel } from '../models/webhooks-label';
export interface WebhookLabelEdited {
  action: 'edited';

  /**
   * The changes to the label if the action was `edited`.
   */
  changes?: {
'color'?: {

/**
 * The previous version of the color if the action was `edited`.
 */
'from': string;
};
'description'?: {

/**
 * The previous version of the description if the action was `edited`.
 */
'from': string;
};
'name'?: {

/**
 * The previous version of the name if the action was `edited`.
 */
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  label: WebhooksLabel;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
