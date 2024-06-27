/* tslint:disable */
/* eslint-disable */

/**
 * Details of a deployment branch or tag policy.
 */
export interface DeploymentBranchPolicy {

  /**
   * The unique identifier of the branch or tag policy.
   */
  id?: number;

  /**
   * The name pattern that branches or tags must match in order to deploy to the environment.
   */
  name?: string;
  node_id?: string;

  /**
   * Whether this rule targets a branch or tag.
   */
  type?: 'branch' | 'tag';
}
