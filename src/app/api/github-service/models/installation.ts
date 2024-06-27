/* tslint:disable */
/* eslint-disable */
import { AppPermissions } from '../models/app-permissions';
import { Enterprise } from '../models/enterprise';
import { NullableSimpleUser } from '../models/nullable-simple-user';
import { SimpleUser } from '../models/simple-user';

/**
 * Installation
 */
export interface Installation {
  access_tokens_url: string;
  account: ((SimpleUser | Enterprise)) | null;
  app_id: number;
  app_slug: string;
  contact_email?: string | null;
  created_at: string;
  events: Array<string>;
  has_multiple_single_files?: boolean;
  html_url: string;

  /**
   * The ID of the installation.
   */
  id: number;
  permissions: AppPermissions;
  repositories_url: string;

  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: 'all' | 'selected';
  single_file_name: string | null;
  single_file_paths?: Array<string>;
  suspended_at: string | null;
  suspended_by: NullableSimpleUser | null;

  /**
   * The ID of the user or organization this token is being scoped to.
   */
  target_id: number;
  target_type: string;
  updated_at: string;
}
