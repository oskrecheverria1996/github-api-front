/* tslint:disable */
/* eslint-disable */
import { CheckRunWithSimpleCheckSuite } from '../models/check-run-with-simple-check-suite';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCheckRunCompleted {
  action?: 'completed';
  check_run: CheckRunWithSimpleCheckSuite;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
