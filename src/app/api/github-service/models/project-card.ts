/* tslint:disable */
/* eslint-disable */
import { NullableSimpleUser } from '../models/nullable-simple-user';

/**
 * Project cards represent a scope of work.
 */
export interface ProjectCard {

  /**
   * Whether or not the card is archived
   */
  archived?: boolean;
  column_name?: string;
  column_url: string;
  content_url?: string;
  created_at: string;
  creator: NullableSimpleUser | null;

  /**
   * The project card's ID
   */
  id: number;
  node_id: string;
  note: string | null;
  project_id?: string;
  project_url: string;
  updated_at: string;
  url: string;
}
