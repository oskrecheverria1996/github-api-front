/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookRepositoryEdited {
  action: 'edited';
  changes: {
'default_branch'?: {
'from': string;
};
'description'?: {
'from': string | null;
};
'homepage'?: {
'from': string | null;
};
'topics'?: {
'from'?: Array<string> | null;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
