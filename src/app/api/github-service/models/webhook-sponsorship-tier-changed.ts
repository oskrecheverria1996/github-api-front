/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksChanges8 } from '../models/webhooks-changes-8';
import { WebhooksSponsorship } from '../models/webhooks-sponsorship';
export interface WebhookSponsorshipTierChanged {
  action: 'tier_changed';
  changes: WebhooksChanges8;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  sponsorship: WebhooksSponsorship;
}
