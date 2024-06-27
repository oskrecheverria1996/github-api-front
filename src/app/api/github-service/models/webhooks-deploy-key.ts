/* tslint:disable */
/* eslint-disable */

/**
 * The [`deploy key`](https://docs.github.com/rest/deploy-keys/deploy-keys#get-a-deploy-key) resource.
 */
export interface WebhooksDeployKey {
  added_by?: string | null;
  created_at: string;
  id: number;
  key: string;
  last_used?: string | null;
  read_only: boolean;
  title: string;
  url: string;
  verified: boolean;
}
