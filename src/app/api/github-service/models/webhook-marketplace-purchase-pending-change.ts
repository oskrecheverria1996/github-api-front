/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksMarketplacePurchase } from '../models/webhooks-marketplace-purchase';
export interface WebhookMarketplacePurchasePendingChange {
  action: 'pending_change';
  effective_date: string;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  marketplace_purchase: WebhooksMarketplacePurchase;
  organization?: OrganizationSimpleWebhooks;
  previous_marketplace_purchase?: {
'account': {
'id': number;
'login': string;
'node_id': string;
'organization_billing_email': string | null;
'type': string;
};
'billing_cycle': string;
'free_trial_ends_on': string | null;
'next_billing_date'?: string | null;
'on_free_trial': boolean;
'plan': {
'bullets': Array<string>;
'description': string;
'has_free_trial': boolean;
'id': number;
'monthly_price_in_cents': number;
'name': string;
'price_model': 'FREE' | 'FLAT_RATE' | 'PER_UNIT';
'unit_name': string | null;
'yearly_price_in_cents': number;
};
'unit_count': number;
};
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
