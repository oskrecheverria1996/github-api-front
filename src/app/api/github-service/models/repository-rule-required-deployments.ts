/* tslint:disable */
/* eslint-disable */

/**
 * Choose which environments must be successfully deployed to before refs can be pushed into a ref that matches this rule.
 */
export interface RepositoryRuleRequiredDeployments {
  parameters?: {

/**
 * The environments that must be successfully deployed to before branches can be merged.
 */
'required_deployment_environments': Array<string>;
};
  type: 'required_deployments';
}
