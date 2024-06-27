/* tslint:disable */
/* eslint-disable */

/**
 * GitHub account for managing multiple users, teams, and repositories
 */
export interface Organization {
  avatar_url: string;

  /**
   * Display blog url for the organization
   */
  blog?: string;

  /**
   * Display company name for the organization
   */
  company?: string;
  created_at: string;
  description: string | null;

  /**
   * Display email for the organization
   */
  email?: string;
  events_url: string;
  followers: number;
  following: number;

  /**
   * Specifies if organization projects are enabled for this org
   */
  has_organization_projects: boolean;

  /**
   * Specifies if repository projects are enabled for repositories that belong to this org
   */
  has_repository_projects: boolean;
  hooks_url: string;
  html_url: string;
  id: number;
  is_verified?: boolean;
  issues_url: string;

  /**
   * Display location for the organization
   */
  location?: string;

  /**
   * Unique login name of the organization
   */
  login: string;
  members_url: string;

  /**
   * Display name for the organization
   */
  name?: string;
  node_id: string;
  plan?: {
'name'?: string;
'space'?: number;
'private_repos'?: number;
'filled_seats'?: number;
'seats'?: number;
};
  public_gists: number;
  public_members_url: string;
  public_repos: number;
  repos_url: string;
  type: string;
  updated_at: string;

  /**
   * URL for the organization
   */
  url: string;
}
