/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { Installation } from '../models/installation';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksRepositoriesAdded } from '../models/webhooks-repositories-added';
import { WebhooksRepositorySelection } from '../models/webhooks-repository-selection';
import { WebhooksUser } from '../models/webhooks-user';
export interface WebhookInstallationRepositoriesRemoved {
  action: 'removed';
  enterprise?: EnterpriseWebhooks;
  installation: Installation;
  organization?: OrganizationSimpleWebhooks;
  repositories_added: WebhooksRepositoriesAdded;

  /**
   * An array of repository objects, which were removed from the installation.
   */
  repositories_removed: Array<{
'full_name': string;

/**
 * Unique identifier of the repository
 */
'id': number;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;

/**
 * Whether the repository is private or public.
 */
'private': boolean;
}>;
  repository?: RepositoryWebhooks;
  repository_selection: WebhooksRepositorySelection;
  requester: WebhooksUser | null;
  sender: SimpleUserWebhooks;
}
