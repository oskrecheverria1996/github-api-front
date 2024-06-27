/* tslint:disable */
/* eslint-disable */
export interface WebhooksChanges8 {
  tier: {

/**
 * The `tier_changed` and `pending_tier_change` will include the original tier before the change or pending change. For more information, see the pending tier change payload.
 */
'from': {
'created_at': string;
'description': string;
'is_custom_ammount'?: boolean;
'is_custom_amount'?: boolean;
'is_one_time': boolean;
'monthly_price_in_cents': number;
'monthly_price_in_dollars': number;
'name': string;
'node_id': string;
};
};
}
