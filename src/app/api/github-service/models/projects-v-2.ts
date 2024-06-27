/* tslint:disable */
/* eslint-disable */
import { NullableSimpleUser } from '../models/nullable-simple-user';
import { SimpleUser } from '../models/simple-user';

/**
 * A projects v2 project
 */
export interface ProjectsV2 {
  closed_at: string | null;
  created_at: string;
  creator: SimpleUser;
  deleted_at: string | null;
  deleted_by: NullableSimpleUser | null;
  description: string | null;
  id: number;
  node_id: string;
  number: number;
  owner: SimpleUser;
  public: boolean;
  short_description: string | null;
  title: string;
  updated_at: string;
}
