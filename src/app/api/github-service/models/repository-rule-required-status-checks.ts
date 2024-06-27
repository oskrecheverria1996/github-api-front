/* tslint:disable */
/* eslint-disable */
import { RepositoryRuleParamsStatusCheckConfiguration } from '../models/repository-rule-params-status-check-configuration';

/**
 * Choose which status checks must pass before the ref is updated. When enabled, commits must first be pushed to another ref where the checks pass.
 */
export interface RepositoryRuleRequiredStatusChecks {
  parameters?: {

/**
 * Status checks that are required.
 */
'required_status_checks': Array<RepositoryRuleParamsStatusCheckConfiguration>;

/**
 * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.
 */
'strict_required_status_checks_policy': boolean;
};
  type: 'required_status_checks';
}
