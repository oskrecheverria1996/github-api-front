/* tslint:disable */
/* eslint-disable */
import { CustomPropertyValue } from '../models/custom-property-value';

/**
 * List of custom property values for a repository
 */
export interface OrgRepoCustomPropertyValues {

  /**
   * List of custom property names and associated values
   */
  properties: Array<CustomPropertyValue>;
  repository_full_name: string;
  repository_id: number;
  repository_name: string;
}
