/* tslint:disable */
/* eslint-disable */
import { EnterpriseTeam } from '../models/enterprise-team';
import { Organization } from '../models/organization';
import { OrganizationSimple } from '../models/organization-simple';
import { SimpleUser } from '../models/simple-user';
import { Team } from '../models/team';

/**
 * Information about a Copilot Business seat assignment for a user, team, or organization.
 */
export interface CopilotSeatDetails {

  /**
   * The assignee that has been granted access to GitHub Copilot.
   */
  assignee: (SimpleUser | Team | Organization);

  /**
   * The team through which the assignee is granted access to GitHub Copilot, if applicable.
   */
  assigning_team?: ((Team | EnterpriseTeam)) | null;

  /**
   * Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format.
   */
  created_at: string;

  /**
   * Timestamp of user's last GitHub Copilot activity, in ISO 8601 format.
   */
  last_activity_at?: string | null;

  /**
   * Last editor that was used by the user for a GitHub Copilot completion.
   */
  last_activity_editor?: string | null;

  /**
   * The organization to which this seat belongs.
   */
  organization?: OrganizationSimple | null;

  /**
   * The pending cancellation date for the seat, in `YYYY-MM-DD` format. This will be null unless the assignee's Copilot access has been canceled during the current billing cycle. If the seat has been cancelled, this corresponds to the start of the organization's next billing cycle.
   */
  pending_cancellation_date?: string | null;

  /**
   * Timestamp of when the assignee's GitHub Copilot access was last updated, in ISO 8601 format.
   */
  updated_at?: string;
}
