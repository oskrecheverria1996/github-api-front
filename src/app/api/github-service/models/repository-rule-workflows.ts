/* tslint:disable */
/* eslint-disable */
import { RepositoryRuleParamsWorkflowFileReference } from '../models/repository-rule-params-workflow-file-reference';

/**
 * Require all changes made to a targeted branch to pass the specified workflows before they can be merged.
 */
export interface RepositoryRuleWorkflows {
  parameters?: {

/**
 * Workflows that must pass for this rule to pass.
 */
'workflows': Array<RepositoryRuleParamsWorkflowFileReference>;
};
  type: 'workflows';
}
