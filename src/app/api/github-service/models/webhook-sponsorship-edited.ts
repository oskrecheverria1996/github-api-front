/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksSponsorship } from '../models/webhooks-sponsorship';
export interface WebhookSponsorshipEdited {
  action: 'edited';
  changes: {
'privacy_level'?: {

/**
 * The `edited` event types include the details about the change when someone edits a sponsorship to change the privacy.
 */
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  sponsorship: WebhooksSponsorship;
}
