/* tslint:disable */
/* eslint-disable */

/**
 * Response
 */
export interface RuleSuite {

  /**
   * The number that identifies the user.
   */
  actor_id?: number | null;

  /**
   * The handle for the GitHub user account.
   */
  actor_name?: string | null;

  /**
   * The last commit sha in the push evaluation.
   */
  after_sha?: string;

  /**
   * The first commit sha before the push evaluation.
   */
  before_sha?: string;

  /**
   * The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`.
   */
  evaluation_result?: 'pass' | 'fail';

  /**
   * The unique identifier of the rule insight.
   */
  id?: number;
  pushed_at?: string;

  /**
   * The ref name that the evaluation ran on.
   */
  ref?: string;

  /**
   * The ID of the repository associated with the rule evaluation.
   */
  repository_id?: number;

  /**
   * The name of the repository without the `.git` extension.
   */
  repository_name?: string;

  /**
   * The result of the rule evaluations for rules with the `active` enforcement status.
   */
  result?: 'pass' | 'fail' | 'bypass';

  /**
   * Details on the evaluated rules.
   */
  rule_evaluations?: Array<{
'rule_source'?: {

/**
 * The type of rule source.
 */
'type'?: string;

/**
 * The ID of the rule source.
 */
'id'?: number | null;

/**
 * The name of the rule source.
 */
'name'?: string | null;
};

/**
 * The enforcement level of this rule source.
 */
'enforcement'?: 'active' | 'evaluate' | 'deleted ruleset';

/**
 * The result of the evaluation of the individual rule.
 */
'result'?: 'pass' | 'fail';

/**
 * The type of rule.
 */
'rule_type'?: string;

/**
 * Any associated details with the rule evaluation.
 */
'details'?: string;
}>;
}
