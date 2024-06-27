/* tslint:disable */
/* eslint-disable */
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { ProjectsV2Item } from '../models/projects-v-2-item';
import { ProjectsV2IterationSetting } from '../models/projects-v-2-iteration-setting';
import { ProjectsV2SingleSelectOption } from '../models/projects-v-2-single-select-option';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookProjectsV2ItemEdited {
  action: 'edited';

  /**
   * The changes made to the item may involve modifications in the item's fields and draft issue body.
   * It includes altered values for text, number, date, single select, and iteration fields, along with the GraphQL node ID of the changed field.
   */
  changes?: ({
'field_value': {
'field_node_id'?: string;
'field_type'?: string;
'field_name'?: string;
'project_number'?: number;
'from'?: ((string | number | ProjectsV2SingleSelectOption | ProjectsV2IterationSetting)) | null;
'to'?: ((string | number | ProjectsV2SingleSelectOption | ProjectsV2IterationSetting)) | null;
};
} | {
'body': {
'from'?: string | null;
'to'?: string | null;
};
});
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  projects_v2_item: ProjectsV2Item;
  sender: SimpleUserWebhooks;
}
