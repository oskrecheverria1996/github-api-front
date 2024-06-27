/* tslint:disable */
/* eslint-disable */
import { MarketplaceAccount } from '../models/marketplace-account';
import { MarketplaceListingPlan } from '../models/marketplace-listing-plan';

/**
 * User Marketplace Purchase
 */
export interface UserMarketplacePurchase {
  account: MarketplaceAccount;
  billing_cycle: string;
  free_trial_ends_on: string | null;
  next_billing_date: string | null;
  on_free_trial: boolean;
  plan: MarketplaceListingPlan;
  unit_count: number | null;
  updated_at: string | null;
}
