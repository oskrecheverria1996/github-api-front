/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookMemberEdited {
  action: 'edited';

  /**
   * The changes to the collaborator permissions
   */
  changes: {
'old_permission'?: {

/**
 * The previous permissions of the collaborator if the action was edited.
 */
'from': string;
};
'permission'?: {
'from'?: string | null;
'to'?: string | null;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  member: WebhooksUser | null;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
