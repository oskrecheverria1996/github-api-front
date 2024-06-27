/* tslint:disable */
/* eslint-disable */
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookGithubAppAuthorizationRevoked {
  action: 'revoked';
  sender: SimpleUserWebhooks;
}
