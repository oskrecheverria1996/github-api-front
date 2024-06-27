/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { ProjectsV2Item } from '../models/projects-v-2-item';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksProjectChanges } from '../models/webhooks-project-changes';
export interface WebhookProjectsV2ItemArchived {
  action: 'archived';
  changes: WebhooksProjectChanges;
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  projects_v2_item: ProjectsV2Item;
  sender: SimpleUserWebhooks;
}
