/* tslint:disable */
/* eslint-disable */
import { MergeGroup } from '../models/merge-group';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookMergeGroupChecksRequested {
  action: 'checks_requested';
  installation?: SimpleInstallation;
  merge_group: MergeGroup;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
