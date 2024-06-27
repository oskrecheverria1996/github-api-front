/* tslint:disable */
/* eslint-disable */

/**
 * Organization Full
 */
export interface OrganizationFull {

  /**
   * Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  advanced_security_enabled_for_new_repositories?: boolean;
  archived_at: string | null;
  avatar_url: string;
  billing_email?: string | null;
  blog?: string;
  collaborators?: number | null;
  company?: string;
  created_at: string;
  default_repository_permission?: string | null;

  /**
   * Whether GitHub Advanced Security is automatically enabled for new repositories and repositories transferred to
   * this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  dependabot_alerts_enabled_for_new_repositories?: boolean;

  /**
   * Whether dependabot security updates are automatically enabled for new repositories and repositories transferred
   * to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  dependabot_security_updates_enabled_for_new_repositories?: boolean;

  /**
   * Whether dependency graph is automatically enabled for new repositories and repositories transferred to this
   * organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  dependency_graph_enabled_for_new_repositories?: boolean;
  description: string | null;
  disk_usage?: number | null;
  email?: string;
  events_url: string;
  followers: number;
  following: number;
  has_organization_projects: boolean;
  has_repository_projects: boolean;
  hooks_url: string;
  html_url: string;
  id: number;
  is_verified?: boolean;
  issues_url: string;
  location?: string;
  login: string;
  members_allowed_repository_creation_type?: string;
  members_can_create_internal_repositories?: boolean;
  members_can_create_pages?: boolean;
  members_can_create_private_pages?: boolean;
  members_can_create_private_repositories?: boolean;
  members_can_create_public_pages?: boolean;
  members_can_create_public_repositories?: boolean;
  members_can_create_repositories?: boolean | null;
  members_can_fork_private_repositories?: boolean | null;
  members_url: string;
  name?: string;
  node_id: string;
  owned_private_repos?: number;
  plan?: {
'name': string;
'space': number;
'private_repos': number;
'filled_seats'?: number;
'seats'?: number;
};
  private_gists?: number | null;
  public_gists: number;
  public_members_url: string;
  public_repos: number;
  repos_url: string;

  /**
   * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this
   * organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  secret_scanning_enabled_for_new_repositories?: boolean;

  /**
   * An optional URL string to display to contributors who are blocked from pushing a secret.
   */
  secret_scanning_push_protection_custom_link?: string | null;

  /**
   * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
   */
  secret_scanning_push_protection_custom_link_enabled?: boolean;

  /**
   * Whether secret scanning push protection is automatically enabled for new repositories and repositories
   * transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   */
  secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
  total_private_repos?: number;
  twitter_username?: string | null;
  two_factor_requirement_enabled?: boolean | null;
  type: string;
  updated_at: string;
  url: string;
  web_commit_signoff_required?: boolean;
}
