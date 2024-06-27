/* tslint:disable */
/* eslint-disable */

/**
 * Group of enterprise owners and/or members
 */
export interface EnterpriseTeam {
  created_at: string;
  group_id?: number | null;
  html_url: string;
  id: number;
  members_url: string;
  name: string;
  slug: string;
  sync_to_organizations: string;
  updated_at: string;
  url: string;
}
