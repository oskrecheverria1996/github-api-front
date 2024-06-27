/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookPullRequestReviewCommentCreated {
  action: 'created';

  /**
   * The [comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request) itself.
   */
  comment: {
'_links': {
'html': {
'href': string;
};
'pull_request': {
'href': string;
};
'self': {
'href': string;
};
};

/**
 * How the author is associated with the repository.
 */
'author_association': 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

/**
 * The text of the comment.
 */
'body': string;

/**
 * The SHA of the commit to which the comment applies.
 */
'commit_id': string;
'created_at': string;

/**
 * The diff of the line that the comment refers to.
 */
'diff_hunk': string;

/**
 * HTML URL for the pull request review comment.
 */
'html_url': string;

/**
 * The ID of the pull request review comment.
 */
'id': number;

/**
 * The comment ID to reply to.
 */
'in_reply_to_id'?: number;

/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 */
'line': number | null;

/**
 * The node ID of the pull request review comment.
 */
'node_id': string;

/**
 * The SHA of the original commit to which the comment applies.
 */
'original_commit_id': string;

/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 */
'original_line': number | null;

/**
 * The index of the original line in the diff to which the comment applies.
 */
'original_position': number;

/**
 * The first line of the range for a multi-line comment.
 */
'original_start_line': number | null;

/**
 * The relative path of the file to which the comment applies.
 */
'path': string;

/**
 * The line index in the diff to which the comment applies.
 */
'position': number | null;

/**
 * The ID of the pull request review to which the comment belongs.
 */
'pull_request_review_id': number | null;

/**
 * URL for the pull request that the review comment belongs to.
 */
'pull_request_url': string;
'reactions': {
'+1': number;
'-1': number;
'confused': number;
'eyes': number;
'heart': number;
'hooray': number;
'laugh': number;
'rocket': number;
'total_count': number;
'url': string;
};

/**
 * The side of the first line of the range for a multi-line comment.
 */
'side': 'LEFT' | 'RIGHT';

/**
 * The first line of the range for a multi-line comment.
 */
'start_line': number | null;

/**
 * The side of the first line of the range for a multi-line comment.
 */
'start_side': 'LEFT' | 'RIGHT' | 'null';

/**
 * The level at which the comment is targeted, can be a diff line or a file.
 */
'subject_type'?: 'line' | 'file';
'updated_at': string;

/**
 * URL for the pull request review comment
 */
'url': string;
'user': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  pull_request: {
'_links': {
'comments': {
'href': string;
};
'commits': {
'href': string;
};
'html': {
'href': string;
};
'issue': {
'href': string;
};
'review_comment': {
'href': string;
};
'review_comments': {
'href': string;
};
'self': {
'href': string;
};
'statuses': {
'href': string;
};
};
'active_lock_reason': 'resolved' | 'off-topic' | 'too heated' | 'spam' | 'null';
'assignee': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};
'assignees': Array<{
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
}>;

/**
 * How the author is associated with the repository.
 */
'author_association': 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

/**
 * The status of auto merging a pull request.
 */
'auto_merge'?: {

/**
 * Commit message for the merge commit.
 */
'commit_message': string | null;

/**
 * Title for the merge commit message.
 */
'commit_title': string | null;
'enabled_by': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};

/**
 * The merge method to use.
 */
'merge_method': 'merge' | 'squash' | 'rebase';
};
'base': {
'label': string;
'ref': string;

/**
 * A git repository
 */
'repo': {

/**
 * Whether to allow auto-merge for pull requests.
 */
'allow_auto_merge'?: boolean;

/**
 * Whether to allow private forks
 */
'allow_forking'?: boolean;

/**
 * Whether to allow merge commits for pull requests.
 */
'allow_merge_commit'?: boolean;

/**
 * Whether to allow rebase merges for pull requests.
 */
'allow_rebase_merge'?: boolean;

/**
 * Whether to allow squash merges for pull requests.
 */
'allow_squash_merge'?: boolean;
'allow_update_branch'?: boolean;
'archive_url': string;

/**
 * Whether the repository is archived.
 */
'archived': boolean;
'assignees_url': string;
'blobs_url': string;
'branches_url': string;
'clone_url': string;
'collaborators_url': string;
'comments_url': string;
'commits_url': string;
'compare_url': string;
'contents_url': string;
'contributors_url': string;
'created_at': (number | string);

/**
 * The default branch of the repository.
 */
'default_branch': string;

/**
 * Whether to delete head branches when pull requests are merged
 */
'delete_branch_on_merge'?: boolean;
'deployments_url': string;
'description': string | null;

/**
 * Returns whether or not this repository is disabled.
 */
'disabled'?: boolean;
'downloads_url': string;
'events_url': string;
'fork': boolean;
'forks': number;
'forks_count': number;
'forks_url': string;
'full_name': string;
'git_commits_url': string;
'git_refs_url': string;
'git_tags_url': string;
'git_url': string;

/**
 * Whether downloads are enabled.
 */
'has_downloads': boolean;

/**
 * Whether issues are enabled.
 */
'has_issues': boolean;
'has_pages': boolean;

/**
 * Whether projects are enabled.
 */
'has_projects': boolean;

/**
 * Whether the wiki is enabled.
 */
'has_wiki': boolean;

/**
 * Whether discussions are enabled.
 */
'has_discussions': boolean;
'homepage': string | null;
'hooks_url': string;
'html_url': string;

/**
 * Unique identifier of the repository
 */
'id': number;
'is_template'?: boolean;
'issue_comment_url': string;
'issue_events_url': string;
'issues_url': string;
'keys_url': string;
'labels_url': string;
'language': string | null;
'languages_url': string;
'license': {
'key': string;
'name': string;
'node_id': string;
'spdx_id': string;
'url': string | null;
};
'master_branch'?: string;

/**
 * The default value for a merge commit message.
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
'merge_commit_message'?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';

/**
 * The default value for a merge commit title.
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
'merge_commit_title'?: 'PR_TITLE' | 'MERGE_MESSAGE';
'merges_url': string;
'milestones_url': string;
'mirror_url': string | null;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;
'notifications_url': string;
'open_issues': number;
'open_issues_count': number;
'organization'?: string;
'owner': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'permissions'?: {
'admin': boolean;
'maintain'?: boolean;
'pull': boolean;
'push': boolean;
'triage'?: boolean;
};

/**
 * Whether the repository is private or public.
 */
'private': boolean;
'public'?: boolean;
'pulls_url': string;
'pushed_at': ((number | string)) | null;
'releases_url': string;
'role_name'?: string | null;
'size': number;

/**
 * The default value for a squash merge commit message:
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
'squash_merge_commit_message'?: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';

/**
 * The default value for a squash merge commit title:
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
'squash_merge_commit_title'?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
'ssh_url': string;
'stargazers'?: number;
'stargazers_count': number;
'stargazers_url': string;
'statuses_url': string;
'subscribers_url': string;
'subscription_url': string;
'svn_url': string;
'tags_url': string;
'teams_url': string;
'topics': Array<string>;
'trees_url': string;
'updated_at': string;
'url': string;

/**
 * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
 */
'use_squash_pr_title_as_default'?: boolean;
'visibility': 'public' | 'private' | 'internal';
'watchers': number;
'watchers_count': number;

/**
 * Whether to require contributors to sign off on web-based commits
 */
'web_commit_signoff_required'?: boolean;
};
'sha': string;
'user': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
};
'body': string | null;
'closed_at': string | null;
'comments_url': string;
'commits_url': string;
'created_at': string;
'diff_url': string;
'draft'?: boolean;
'head': {
'label': string;
'ref': string;

/**
 * A git repository
 */
'repo': {

/**
 * Whether to allow auto-merge for pull requests.
 */
'allow_auto_merge'?: boolean;

/**
 * Whether to allow private forks
 */
'allow_forking'?: boolean;

/**
 * Whether to allow merge commits for pull requests.
 */
'allow_merge_commit'?: boolean;

/**
 * Whether to allow rebase merges for pull requests.
 */
'allow_rebase_merge'?: boolean;

/**
 * Whether to allow squash merges for pull requests.
 */
'allow_squash_merge'?: boolean;
'allow_update_branch'?: boolean;
'archive_url': string;

/**
 * Whether the repository is archived.
 */
'archived': boolean;
'assignees_url': string;
'blobs_url': string;
'branches_url': string;
'clone_url': string;
'collaborators_url': string;
'comments_url': string;
'commits_url': string;
'compare_url': string;
'contents_url': string;
'contributors_url': string;
'created_at': (number | string);

/**
 * The default branch of the repository.
 */
'default_branch': string;

/**
 * Whether to delete head branches when pull requests are merged
 */
'delete_branch_on_merge'?: boolean;
'deployments_url': string;
'description': string | null;

/**
 * Returns whether or not this repository is disabled.
 */
'disabled'?: boolean;
'downloads_url': string;
'events_url': string;
'fork': boolean;
'forks': number;
'forks_count': number;
'forks_url': string;
'full_name': string;
'git_commits_url': string;
'git_refs_url': string;
'git_tags_url': string;
'git_url': string;

/**
 * Whether downloads are enabled.
 */
'has_downloads': boolean;

/**
 * Whether issues are enabled.
 */
'has_issues': boolean;
'has_pages': boolean;

/**
 * Whether projects are enabled.
 */
'has_projects': boolean;

/**
 * Whether the wiki is enabled.
 */
'has_wiki': boolean;

/**
 * Whether discussions are enabled.
 */
'has_discussions'?: boolean;
'homepage': string | null;
'hooks_url': string;
'html_url': string;

/**
 * Unique identifier of the repository
 */
'id': number;
'is_template'?: boolean;
'issue_comment_url': string;
'issue_events_url': string;
'issues_url': string;
'keys_url': string;
'labels_url': string;
'language': string | null;
'languages_url': string;
'license': {
'key': string;
'name': string;
'node_id': string;
'spdx_id': string;
'url': string | null;
};
'master_branch'?: string;

/**
 * The default value for a merge commit message.
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
'merge_commit_message'?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';

/**
 * The default value for a merge commit title.
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
'merge_commit_title'?: 'PR_TITLE' | 'MERGE_MESSAGE';
'merges_url': string;
'milestones_url': string;
'mirror_url': string | null;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;
'notifications_url': string;
'open_issues': number;
'open_issues_count': number;
'organization'?: string;
'owner': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'permissions'?: {
'admin': boolean;
'maintain'?: boolean;
'pull': boolean;
'push': boolean;
'triage'?: boolean;
};

/**
 * Whether the repository is private or public.
 */
'private': boolean;
'public'?: boolean;
'pulls_url': string;
'pushed_at': ((number | string)) | null;
'releases_url': string;
'role_name'?: string | null;
'size': number;

/**
 * The default value for a squash merge commit message:
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
'squash_merge_commit_message'?: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';

/**
 * The default value for a squash merge commit title:
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
'squash_merge_commit_title'?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
'ssh_url': string;
'stargazers'?: number;
'stargazers_count': number;
'stargazers_url': string;
'statuses_url': string;
'subscribers_url': string;
'subscription_url': string;
'svn_url': string;
'tags_url': string;
'teams_url': string;
'topics': Array<string>;
'trees_url': string;
'updated_at': string;
'url': string;

/**
 * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
 */
'use_squash_pr_title_as_default'?: boolean;
'visibility': 'public' | 'private' | 'internal';
'watchers': number;
'watchers_count': number;

/**
 * Whether to require contributors to sign off on web-based commits
 */
'web_commit_signoff_required'?: boolean;
};
'sha': string;
'user': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
};
'html_url': string;
'id': number;
'issue_url': string;
'labels': Array<{

/**
 * 6-character hex code, without the leading #, identifying the color
 */
'color': string;
'default': boolean;
'description': string | null;
'id': number;

/**
 * The name of the label.
 */
'name': string;
'node_id': string;

/**
 * URL for the label
 */
'url': string;
}>;
'locked': boolean;
'merge_commit_sha': string | null;
'merged_at': string | null;

/**
 * A collection of related issues and pull requests.
 */
'milestone': {
'closed_at': string | null;
'closed_issues': number;
'created_at': string;
'creator': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};
'description': string | null;
'due_on': string | null;
'html_url': string;
'id': number;
'labels_url': string;
'node_id': string;

/**
 * The number of the milestone.
 */
'number': number;
'open_issues': number;

/**
 * The state of the milestone.
 */
'state': 'open' | 'closed';

/**
 * The title of the milestone.
 */
'title': string;
'updated_at': string;
'url': string;
};
'node_id': string;
'number': number;
'patch_url': string;
'requested_reviewers': Array<({
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
} | {
'deleted'?: boolean;

/**
 * Description of the team
 */
'description': string | null;
'html_url': string;

/**
 * Unique identifier of the team
 */
'id': number;
'members_url': string;

/**
 * Name of the team
 */
'name': string;
'node_id': string;
'parent'?: {

/**
 * Description of the team
 */
'description': string | null;
'html_url': string;

/**
 * Unique identifier of the team
 */
'id': number;
'members_url': string;

/**
 * Name of the team
 */
'name': string;
'node_id': string;

/**
 * Permission that the team will have for its repositories
 */
'permission': string;
'privacy': 'open' | 'closed' | 'secret';
'repositories_url': string;
'slug': string;

/**
 * URL for the team
 */
'url': string;
};

/**
 * Permission that the team will have for its repositories
 */
'permission': string;
'privacy': 'open' | 'closed' | 'secret';
'repositories_url': string;
'slug': string;

/**
 * URL for the team
 */
'url': string;
})>;
'requested_teams': Array<{
'deleted'?: boolean;

/**
 * Description of the team
 */
'description'?: string | null;
'html_url'?: string;

/**
 * Unique identifier of the team
 */
'id': number;
'members_url'?: string;

/**
 * Name of the team
 */
'name': string;
'node_id'?: string;
'parent'?: {

/**
 * Description of the team
 */
'description': string | null;
'html_url': string;

/**
 * Unique identifier of the team
 */
'id': number;
'members_url': string;

/**
 * Name of the team
 */
'name': string;
'node_id': string;

/**
 * Permission that the team will have for its repositories
 */
'permission': string;
'privacy': 'open' | 'closed' | 'secret';
'repositories_url': string;
'slug': string;

/**
 * URL for the team
 */
'url': string;
};

/**
 * Permission that the team will have for its repositories
 */
'permission'?: string;
'privacy'?: 'open' | 'closed' | 'secret';
'repositories_url'?: string;
'slug'?: string;

/**
 * URL for the team
 */
'url'?: string;
}>;
'review_comment_url': string;
'review_comments_url': string;
'state': 'open' | 'closed';
'statuses_url': string;
'title': string;
'updated_at': string;
'url': string;
'user': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};
};
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
