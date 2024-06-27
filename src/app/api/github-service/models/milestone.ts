/* tslint:disable */
/* eslint-disable */
import { NullableSimpleUser } from '../models/nullable-simple-user';

/**
 * A collection of related issues and pull requests.
 */
export interface Milestone {
  closed_at: string | null;
  closed_issues: number;
  created_at: string;
  creator: NullableSimpleUser | null;
  description: string | null;
  due_on: string | null;
  html_url: string;
  id: number;
  labels_url: string;
  node_id: string;

  /**
   * The number of the milestone.
   */
  number: number;
  open_issues: number;

  /**
   * The state of the milestone.
   */
  state: 'open' | 'closed';

  /**
   * The title of the milestone.
   */
  title: string;
  updated_at: string;
  url: string;
}
