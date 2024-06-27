/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SecretScanningAlertWebhook } from '../models/secret-scanning-alert-webhook';
import { SecretScanningLocation } from '../models/secret-scanning-location';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookSecretScanningAlertLocationCreated {
  action?: 'created';
  alert: SecretScanningAlertWebhook;
  installation?: SimpleInstallation;
  location: SecretScanningLocation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
