/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksIssue2 } from '../models/webhooks-issue-2';
export interface WebhookIssuesTransferred {
  action: 'transferred';
  changes: {

/**
 * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
 */
'new_issue': {
'active_lock_reason': 'resolved' | 'off-topic' | 'too heated' | 'spam' | 'null';
'assignee'?: {
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
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
}>;

/**
 * How the author is associated with the repository.
 */
'author_association': 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIMER' | 'FIRST_TIME_CONTRIBUTOR' | 'MANNEQUIN' | 'MEMBER' | 'NONE' | 'OWNER';

/**
 * Contents of the issue
 */
'body': string | null;
'closed_at': string | null;
'comments': number;
'comments_url': string;
'created_at': string;
'draft'?: boolean;
'events_url': string;
'html_url': string;
'id': number;
'labels'?: Array<{

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
'labels_url': string;
'locked'?: boolean;

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
'type'?: 'Bot' | 'User' | 'Organization';
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

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
'performed_via_github_app'?: {
'created_at': string | null;
'description': string | null;

/**
 * The list of events for the GitHub app
 */
'events'?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run'>;
'external_url': string | null;
'html_url': string;

/**
 * Unique identifier of the GitHub app
 */
'id': number | null;

/**
 * The name of the GitHub app
 */
'name': string;
'node_id': string;
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

/**
 * The set of permissions for the GitHub app
 */
'permissions'?: {
'actions'?: 'read' | 'write';
'administration'?: 'read' | 'write';
'checks'?: 'read' | 'write';
'content_references'?: 'read' | 'write';
'contents'?: 'read' | 'write';
'deployments'?: 'read' | 'write';
'discussions'?: 'read' | 'write';
'emails'?: 'read' | 'write';
'environments'?: 'read' | 'write';
'issues'?: 'read' | 'write';
'keys'?: 'read' | 'write';
'members'?: 'read' | 'write';
'metadata'?: 'read' | 'write';
'organization_administration'?: 'read' | 'write';
'organization_hooks'?: 'read' | 'write';
'organization_packages'?: 'read' | 'write';
'organization_plan'?: 'read' | 'write';
'organization_projects'?: 'read' | 'write';
'organization_secrets'?: 'read' | 'write';
'organization_self_hosted_runners'?: 'read' | 'write';
'organization_user_blocking'?: 'read' | 'write';
'packages'?: 'read' | 'write';
'pages'?: 'read' | 'write';
'pull_requests'?: 'read' | 'write';
'repository_hooks'?: 'read' | 'write';
'repository_projects'?: 'read' | 'write';
'secret_scanning_alerts'?: 'read' | 'write';
'secrets'?: 'read' | 'write';
'security_events'?: 'read' | 'write';
'security_scanning_alert'?: 'read' | 'write';
'single_file'?: 'read' | 'write';
'statuses'?: 'read' | 'write';
'team_discussions'?: 'read' | 'write';
'vulnerability_alerts'?: 'read' | 'write';
'workflows'?: 'read' | 'write';
};

/**
 * The slug name of the GitHub app
 */
'slug'?: string;
'updated_at': string | null;
};
'pull_request'?: {
'diff_url'?: string;
'html_url'?: string;
'merged_at'?: string | null;
'patch_url'?: string;
'url'?: string;
};
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
'repository_url': string;

/**
 * State of the issue; either 'open' or 'closed'
 */
'state'?: 'open' | 'closed';
'state_reason'?: string | null;
'timeline_url'?: string;

/**
 * Title of the issue
 */
'title': string;
'updated_at': string;

/**
 * URL for the issue
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

/**
 * A git repository
 */
'new_repository': {

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
 * The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.
 */
'custom_properties'?: {
[key: string]: any;
};

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
'visibility': 'public' | 'private' | 'internal';
'watchers': number;
'watchers_count': number;

/**
 * Whether to require contributors to sign off on web-based commits
 */
'web_commit_signoff_required'?: boolean;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  issue: WebhooksIssue2;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
