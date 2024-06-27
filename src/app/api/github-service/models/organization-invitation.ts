/* tslint:disable */
/* eslint-disable */
import { SimpleUser } from '../models/simple-user';

/**
 * Organization Invitation
 */
export interface OrganizationInvitation {
  created_at: string;
  email: string | null;
  failed_at?: string | null;
  failed_reason?: string | null;
  id: number;
  invitation_source?: string;
  invitation_teams_url: string;
  inviter: SimpleUser;
  login: string | null;
  node_id: string;
  role: string;
  team_count: number;
}
