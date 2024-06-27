/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { ProjectsV2 } from '../models/projects-v-2';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookProjectsV2ProjectEdited {
  action: 'edited';
  changes: {
'description'?: {
'from'?: string | null;
'to'?: string | null;
};
'public'?: {
'from'?: boolean;
'to'?: boolean;
};
'short_description'?: {
'from'?: string | null;
'to'?: string | null;
};
'title'?: {
'from'?: string;
'to'?: string;
};
};
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  projects_v2: ProjectsV2;
  sender: SimpleUserWebhooks;
}
