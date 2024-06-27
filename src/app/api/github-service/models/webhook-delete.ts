/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksDeployPusherType } from '../models/webhooks-deploy-pusher-type';
import { WebhooksRef0 } from '../models/webhooks-ref-0';
export interface WebhookDelete {
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  pusher_type: WebhooksDeployPusherType;
  ref: WebhooksRef0;

  /**
   * The type of Git ref object deleted in the repository.
   */
  ref_type: 'tag' | 'branch';
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
