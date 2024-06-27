/* tslint:disable */
/* eslint-disable */

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface WebhooksTeam {
  deleted?: boolean;

  /**
   * Description of the team
   */
  description?: string | null;
  html_url?: string;

  /**
   * Unique identifier of the team
   */
  id: number;
  members_url?: string;

  /**
   * Name of the team
   */
  name: string;
  node_id?: string;
  notification_setting?: 'notifications_enabled' | 'notifications_disabled';
  parent?: {

/**
 * Description of the team
 */
'description': string | null;
'html_url': string;

/**
 * Unique identifier of the team
 */
'id': number;
'members_url': string;

/**
 * Name of the team
 */
'name': string;
'node_id': string;

/**
 * Permission that the team will have for its repositories
 */
'permission': string;
'privacy': 'open' | 'closed' | 'secret';

/**
 * Whether team members will receive notifications when their team is @mentioned
 */
'notification_setting': 'notifications_enabled' | 'notifications_disabled';
'repositories_url': string;
'slug': string;

/**
 * URL for the team
 */
'url': string;
};

  /**
   * Permission that the team will have for its repositories
   */
  permission?: string;
  privacy?: 'open' | 'closed' | 'secret';
  repositories_url?: string;
  slug?: string;

  /**
   * URL for the team
   */
  url?: string;
}
