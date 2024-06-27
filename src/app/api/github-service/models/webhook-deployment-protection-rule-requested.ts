/* tslint:disable */
/* eslint-disable */
import { Deployment } from '../models/deployment';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { PullRequest } from '../models/pull-request';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookDeploymentProtectionRuleRequested {
  action?: 'requested';
  deployment?: Deployment;

  /**
   * The URL to review the deployment protection rule.
   */
  deployment_callback_url?: string;

  /**
   * The name of the environment that has the deployment protection rule.
   */
  environment?: string;

  /**
   * The event that triggered the deployment protection rule.
   */
  event?: string;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  pull_requests?: Array<PullRequest>;
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
