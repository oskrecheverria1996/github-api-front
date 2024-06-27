/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksRelease } from '../models/webhooks-release';
export interface WebhookReleaseEdited {
  action: 'edited';
  changes: {
'body'?: {

/**
 * The previous version of the body if the action was `edited`.
 */
'from': string;
};
'name'?: {

/**
 * The previous version of the name if the action was `edited`.
 */
'from': string;
};
'make_latest'?: {

/**
 * Whether this release was explicitly `edited` to be the latest.
 */
'to': boolean;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  release: WebhooksRelease;
  repository: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
