/* tslint:disable */
/* eslint-disable */
import { MergeGroup } from '../models/merge-group';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookMergeGroupDestroyed {
  action: 'destroyed';
  installation?: SimpleInstallation;
  merge_group: MergeGroup;
  organization?: OrganizationSimpleWebhooks;

  /**
   * Explains why the merge group is being destroyed. The group could have been merged, removed from the queue (dequeued), or invalidated by an earlier queue entry being dequeued (invalidated).
   */
  reason?: 'merged' | 'invalidated' | 'dequeued';
  repository?: RepositoryWebhooks;
  sender?: SimpleUserWebhooks;
}
