/* tslint:disable */
/* eslint-disable */
import { PullRequest } from '../models/pull-request';
export type PullRequestWebhook = PullRequest & {

/**
 * Whether to allow auto-merge for pull requests.
 */
'allow_auto_merge'?: boolean;

/**
 * Whether to allow updating the pull request's branch.
 */
'allow_update_branch'?: boolean;

/**
 * Whether to delete head branches when pull requests are merged.
 */
'delete_branch_on_merge'?: boolean;

/**
 * The default value for a merge commit message.
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
'merge_commit_message'?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';

/**
 * The default value for a merge commit title.
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., "Merge pull request #123 from branch-name").
 */
'merge_commit_title'?: 'PR_TITLE' | 'MERGE_MESSAGE';

/**
 * The default value for a squash merge commit message:
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
'squash_merge_commit_message'?: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';

/**
 * The default value for a squash merge commit title:
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
'squash_merge_commit_title'?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';

/**
 * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.**
 */
'use_squash_pr_title_as_default'?: boolean;
};
