/* tslint:disable */
/* eslint-disable */
import { ProjectsV2ItemContentType } from '../models/projects-v-2-item-content-type';
import { SimpleUser } from '../models/simple-user';

/**
 * An item belonging to a project
 */
export interface ProjectsV2Item {
  archived_at: string | null;
  content_node_id: string;
  content_type: ProjectsV2ItemContentType;
  created_at: string;
  creator?: SimpleUser;
  id: number;
  node_id?: string;
  project_node_id?: string;
  updated_at: string;
}
