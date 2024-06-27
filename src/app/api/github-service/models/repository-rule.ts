/* tslint:disable */
/* eslint-disable */
import { RepositoryRuleBranchNamePattern } from '../models/repository-rule-branch-name-pattern';
import { RepositoryRuleCodeScanning } from '../models/repository-rule-code-scanning';
import { RepositoryRuleCommitAuthorEmailPattern } from '../models/repository-rule-commit-author-email-pattern';
import { RepositoryRuleCommitMessagePattern } from '../models/repository-rule-commit-message-pattern';
import { RepositoryRuleCommitterEmailPattern } from '../models/repository-rule-committer-email-pattern';
import { RepositoryRuleCreation } from '../models/repository-rule-creation';
import { RepositoryRuleDeletion } from '../models/repository-rule-deletion';
import { RepositoryRuleNonFastForward } from '../models/repository-rule-non-fast-forward';
import { RepositoryRulePullRequest } from '../models/repository-rule-pull-request';
import { RepositoryRuleRequiredDeployments } from '../models/repository-rule-required-deployments';
import { RepositoryRuleRequiredLinearHistory } from '../models/repository-rule-required-linear-history';
import { RepositoryRuleRequiredSignatures } from '../models/repository-rule-required-signatures';
import { RepositoryRuleRequiredStatusChecks } from '../models/repository-rule-required-status-checks';
import { RepositoryRuleTagNamePattern } from '../models/repository-rule-tag-name-pattern';
import { RepositoryRuleUpdate } from '../models/repository-rule-update';
import { RepositoryRuleWorkflows } from '../models/repository-rule-workflows';

/**
 * A repository rule.
 */
export type RepositoryRule = (RepositoryRuleCreation | RepositoryRuleUpdate | RepositoryRuleDeletion | RepositoryRuleRequiredLinearHistory | RepositoryRuleRequiredDeployments | RepositoryRuleRequiredSignatures | RepositoryRulePullRequest | RepositoryRuleRequiredStatusChecks | RepositoryRuleNonFastForward | RepositoryRuleCommitMessagePattern | RepositoryRuleCommitAuthorEmailPattern | RepositoryRuleCommitterEmailPattern | RepositoryRuleBranchNamePattern | RepositoryRuleTagNamePattern | {
'type': 'file_path_restriction';
'parameters'?: {

/**
 * The file paths that are restricted from being pushed to the commit graph.
 */
'restricted_file_paths': Array<string>;
};
} | {
'type': 'max_file_path_length';
'parameters'?: {

/**
 * The maximum amount of characters allowed in file paths
 */
'max_file_path_length': number;
};
} | {
'type': 'file_extension_restriction';
'parameters'?: {

/**
 * The file extensions that are restricted from being pushed to the commit graph.
 */
'restricted_file_extensions': Array<string>;
};
} | {
'type': 'max_file_size';
'parameters'?: {

/**
 * The maximum file size allowed in megabytes. This limit does not apply to Git Large File Storage (Git LFS).
 */
'max_file_size': number;
};
} | RepositoryRuleWorkflows | RepositoryRuleCodeScanning);
