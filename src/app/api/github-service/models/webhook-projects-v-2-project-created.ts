/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { ProjectsV2 } from '../models/projects-v-2';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';

/**
 * A project was created
 */
export interface WebhookProjectsV2ProjectCreated {
  action: 'created';
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  projects_v2: ProjectsV2;
  sender: SimpleUserWebhooks;
}
