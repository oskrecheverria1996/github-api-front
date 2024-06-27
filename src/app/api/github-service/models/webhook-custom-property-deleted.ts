/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCustomPropertyDeleted {
  action: 'deleted';
  definition: {

/**
 * The name of the property that was deleted.
 */
'property_name': string;
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  sender?: SimpleUserWebhooks;
}
