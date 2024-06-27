/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { PersonalAccessTokenRequest } from '../models/personal-access-token-request';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookPersonalAccessTokenRequestApproved {
  action: 'approved';
  enterprise?: EnterpriseWebhooks;
  installation: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  personal_access_token_request: PersonalAccessTokenRequest;
  sender: SimpleUserWebhooks;
}
