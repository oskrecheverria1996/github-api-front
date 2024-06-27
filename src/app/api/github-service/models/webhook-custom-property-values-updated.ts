/* tslint:disable */
/* eslint-disable */
import { CustomPropertyValue } from '../models/custom-property-value';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCustomPropertyValuesUpdated {
  action: 'updated';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;

  /**
   * The new custom property values for the repository.
   */
  new_property_values: Array<CustomPropertyValue>;

  /**
   * The old custom property values for the repository.
   */
  old_property_values: Array<CustomPropertyValue>;
  organization: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
