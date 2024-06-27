/* tslint:disable */
/* eslint-disable */
import { HookResponse } from '../models/hook-response';
import { WebhookConfig } from '../models/webhook-config';

/**
 * Webhooks for repositories.
 */
export interface Hook {

  /**
   * Determines whether the hook is actually triggered on pushes.
   */
  active: boolean;
  config: WebhookConfig;
  created_at: string;
  deliveries_url?: string;

  /**
   * Determines what events the hook is triggered for. Default: ['push'].
   */
  events: Array<string>;

  /**
   * Unique identifier of the webhook.
   */
  id: number;
  last_response: HookResponse;

  /**
   * The name of a valid service, use 'web' for a webhook.
   */
  name: string;
  ping_url: string;
  test_url: string;
  type: string;
  updated_at: string;
  url: string;
}
