/* tslint:disable */
/* eslint-disable */
import { NullableSimpleUser } from '../models/nullable-simple-user';

/**
 * Organization roles
 */
export interface OrganizationRole {

  /**
   * The date and time the role was created.
   */
  created_at: string;

  /**
   * A short description about who this role is for or what permissions it grants.
   */
  description?: string | null;

  /**
   * The unique identifier of the role.
   */
  id: number;

  /**
   * The name of the role.
   */
  name: string;
  organization: NullableSimpleUser | null;

  /**
   * A list of permissions included in this role.
   */
  permissions: Array<string>;

  /**
   * The date and time the role was last updated.
   */
  updated_at: string;
}
