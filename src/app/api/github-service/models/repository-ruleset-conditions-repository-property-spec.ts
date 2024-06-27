/* tslint:disable */
/* eslint-disable */

/**
 * Parameters for a targeting a repository property
 */
export interface RepositoryRulesetConditionsRepositoryPropertySpec {

  /**
   * The name of the repository property to target
   */
  name: string;

  /**
   * The values to match for the repository property
   */
  property_values: Array<string>;
}
