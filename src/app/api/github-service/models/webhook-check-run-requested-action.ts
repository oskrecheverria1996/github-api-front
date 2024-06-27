/* tslint:disable */
/* eslint-disable */
import { CheckRunWithSimpleCheckSuite } from '../models/check-run-with-simple-check-suite';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCheckRunRequestedAction {
  action: 'requested_action';
  check_run: CheckRunWithSimpleCheckSuite;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;

  /**
   * The action requested by the user.
   */
  requested_action?: {

/**
 * The integrator reference of the action requested by the user.
 */
'identifier'?: string;
};
  sender: SimpleUserWebhooks;
}
