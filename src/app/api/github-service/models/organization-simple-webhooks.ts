/* tslint:disable */
/* eslint-disable */

/**
 * A GitHub organization. Webhook payloads contain the `organization` property when the webhook is configured for an
 * organization, or when the event occurs from activity in a repository owned by an organization.
 */
export interface OrganizationSimpleWebhooks {
  avatar_url: string;
  description: string | null;
  events_url: string;
  hooks_url: string;
  id: number;
  issues_url: string;
  login: string;
  members_url: string;
  node_id: string;
  public_members_url: string;
  repos_url: string;
  url: string;
}
