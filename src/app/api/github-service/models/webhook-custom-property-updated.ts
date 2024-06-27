/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrgCustomProperty } from '../models/org-custom-property';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCustomPropertyUpdated {
  action: 'updated';
  definition: OrgCustomProperty;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  sender?: SimpleUserWebhooks;
}
