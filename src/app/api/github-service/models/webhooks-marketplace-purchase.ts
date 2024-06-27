/* tslint:disable */
/* eslint-disable */
export interface WebhooksMarketplacePurchase {
  account: {
'id': number;
'login': string;
'node_id': string;
'organization_billing_email': string | null;
'type': string;
};
  billing_cycle: string;
  free_trial_ends_on: string | null;
  next_billing_date: string | null;
  on_free_trial: boolean;
  plan: {
'bullets': Array<string | null>;
'description': string;
'has_free_trial': boolean;
'id': number;
'monthly_price_in_cents': number;
'name': string;
'price_model': 'FREE' | 'FLAT_RATE' | 'PER_UNIT';
'unit_name': string | null;
'yearly_price_in_cents': number;
};
  unit_count: number;
}
