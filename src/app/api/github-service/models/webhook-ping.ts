/* tslint:disable */
/* eslint-disable */
import { HookResponse } from '../models/hook-response';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhookConfigContentType } from '../models/webhook-config-content-type';
import { WebhookConfigInsecureSsl } from '../models/webhook-config-insecure-ssl';
import { WebhookConfigSecret } from '../models/webhook-config-secret';
import { WebhookConfigUrl } from '../models/webhook-config-url';
export interface WebhookPing {

  /**
   * The webhook that is being pinged
   */
  hook?: {

/**
 * Determines whether the hook is actually triggered for the events it subscribes to.
 */
'active': boolean;

/**
 * Only included for GitHub Apps. When you register a new GitHub App, GitHub sends a ping event to the webhook URL you specified during registration. The GitHub App ID sent in this field is required for authenticating an app.
 */
'app_id'?: number;
'config': {
'content_type'?: WebhookConfigContentType;
'insecure_ssl'?: WebhookConfigInsecureSsl;
'secret'?: WebhookConfigSecret;
'url'?: WebhookConfigUrl;
};
'created_at': string;
'deliveries_url'?: string;

/**
 * Determines what events the hook is triggered for. Default: ['push'].
 */
'events': Array<string>;

/**
 * Unique identifier of the webhook.
 */
'id': number;
'last_response'?: HookResponse;

/**
 * The type of webhook. The only valid value is 'web'.
 */
'name': 'web';
'ping_url'?: string;
'test_url'?: string;
'type': string;
'updated_at': string;
'url'?: string;
};

  /**
   * The ID of the webhook that triggered the ping.
   */
  hook_id?: number;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;

  /**
   * Random string of GitHub zen.
   */
  zen?: string;
}
