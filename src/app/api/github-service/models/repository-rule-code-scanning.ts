/* tslint:disable */
/* eslint-disable */
import { RepositoryRuleParamsCodeScanningTool } from '../models/repository-rule-params-code-scanning-tool';

/**
 * Choose which tools must provide code scanning results before the reference is updated. When configured, code scanning must be enabled and have results for both the commit and the reference being updated.
 */
export interface RepositoryRuleCodeScanning {
  parameters?: {

/**
 * Tools that must provide code scanning results for this rule to pass.
 */
'code_scanning_tools': Array<RepositoryRuleParamsCodeScanningTool>;
};
  type: 'code_scanning';
}
