/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksMarketplacePurchase } from '../models/webhooks-marketplace-purchase';
import { WebhooksPreviousMarketplacePurchase } from '../models/webhooks-previous-marketplace-purchase';
export interface WebhookMarketplacePurchaseCancelled {
  action: 'cancelled';
  effective_date: string;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  marketplace_purchase: WebhooksMarketplacePurchase;
  organization?: OrganizationSimpleWebhooks;
  previous_marketplace_purchase?: WebhooksPreviousMarketplacePurchase;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
