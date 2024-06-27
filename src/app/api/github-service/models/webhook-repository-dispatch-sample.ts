/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookRepositoryDispatchSample {

  /**
   * The `event_type` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  action: string;
  branch: string;

  /**
   * The `client_payload` that was specified in the `POST /repos/{owner}/{repo}/dispatches` request body.
   */
  client_payload: ({
[key: string]: any;
}) | null;
  enterprise?: EnterpriseWebhooks;
  installation: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
