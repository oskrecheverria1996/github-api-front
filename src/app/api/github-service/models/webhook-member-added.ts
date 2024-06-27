/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookMemberAdded {
  action: 'added';
  changes?: {

/**
 * This field is included for legacy purposes; use the `role_name` field instead. The `maintain`
 * role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role
 * assigned to the collaborator, use the `role_name` field instead, which will provide the full
 * role name, including custom roles.
 */
'permission'?: {
'to': 'write' | 'admin' | 'read';
};

/**
 * The role assigned to the collaborator.
 */
'role_name'?: {
'to': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  member: WebhooksUser | null;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
