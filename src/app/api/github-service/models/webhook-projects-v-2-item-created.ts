/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { ProjectsV2Item } from '../models/projects-v-2-item';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookProjectsV2ItemCreated {
  action: 'created';
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  projects_v2_item: ProjectsV2Item;
  sender: SimpleUserWebhooks;
}
