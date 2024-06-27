/* tslint:disable */
/* eslint-disable */
import { RepositoryRulesetConditionsRepositoryPropertySpec } from '../models/repository-ruleset-conditions-repository-property-spec';

/**
 * Parameters for a repository property condition
 */
export interface RepositoryRulesetConditionsRepositoryPropertyTarget {
  repository_property: {

/**
 * The repository properties and values to include. All of these properties must match for the condition to pass.
 */
'include'?: Array<RepositoryRulesetConditionsRepositoryPropertySpec>;

/**
 * The repository properties and values to exclude. The condition will not pass if any of these properties match.
 */
'exclude'?: Array<RepositoryRulesetConditionsRepositoryPropertySpec>;
};
}
