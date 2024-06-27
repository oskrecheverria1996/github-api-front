/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksWorkflow } from '../models/webhooks-workflow';
export interface WebhookDeploymentStatusCreated {
  action: 'created';
  check_run?: {
'completed_at': string | null;

/**
 * The result of the completed check run. This value will be `null` until the check run has completed.
 */
'conclusion': 'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'skipped' | 'null';
'details_url': string;
'external_id': string;

/**
 * The SHA of the commit that is being checked.
 */
'head_sha': string;
'html_url': string;

/**
 * The id of the check.
 */
'id': number;

/**
 * The name of the check run.
 */
'name': string;
'node_id': string;
'started_at': string;

/**
 * The current status of the check run. Can be `queued`, `in_progress`, or `completed`.
 */
'status': 'queued' | 'in_progress' | 'completed' | 'waiting' | 'pending';
'url': string;
};

  /**
   * The [deployment](https://docs.github.com/rest/deployments/deployments#list-deployments).
   */
  deployment: {
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
'environment': string;
'id': number;
'node_id': string;
'original_environment': string;
'payload': ((string | {
})) | null;

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
'performed_via_github_app'?: {
'created_at': string | null;
'description': string | null;

/**
 * The list of events for the GitHub app
 */
'events'?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'merge_queue_entry' | 'workflow_job' | 'pull_request_review_thread' | 'secret_scanning_alert_location' | 'merge_group'>;
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
'production_environment'?: boolean;
'ref': string;
'repository_url': string;
'sha': string;
'statuses_url': string;
'task': string;
'transient_environment'?: boolean;
'updated_at': string;
'url': string;
};

  /**
   * The [deployment status](https://docs.github.com/rest/deployments/statuses#list-deployment-statuses).
   */
  deployment_status: {
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
'deployment_url': string;

/**
 * The optional human-readable description added to the status.
 */
'description': string;
'environment': string;
'environment_url'?: string;
'id': number;
'log_url'?: string;
'node_id': string;

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
'performed_via_github_app'?: {
'created_at': string | null;
'description': string | null;

/**
 * The list of events for the GitHub app
 */
'events'?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'pull_request_review_thread' | 'merge_queue_entry' | 'workflow_job' | 'merge_group' | 'secret_scanning_alert_location'>;
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
'repository_url': string;

/**
 * The new state. Can be `pending`, `success`, `failure`, or `error`.
 */
'state': string;

/**
 * The optional link added to the status.
 */
'target_url': string;
'updated_at': string;
'url': string;
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  workflow?: WebhooksWorkflow | null;
  workflow_run?: {
'actor': {
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
'artifacts_url'?: string;
'cancel_url'?: string;
'check_suite_id': number;
'check_suite_node_id': string;
'check_suite_url'?: string;
'conclusion': 'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'null' | 'startup_failure';
'created_at': string;
'display_title': string;
'event': string;
'head_branch': string;
'head_commit'?: any | null;
'head_repository'?: {
'archive_url'?: string;
'assignees_url'?: string;
'blobs_url'?: string;
'branches_url'?: string;
'collaborators_url'?: string;
'comments_url'?: string;
'commits_url'?: string;
'compare_url'?: string;
'contents_url'?: string;
'contributors_url'?: string;
'deployments_url'?: string;
'description'?: any | null;
'downloads_url'?: string;
'events_url'?: string;
'fork'?: boolean;
'forks_url'?: string;
'full_name'?: string;
'git_commits_url'?: string;
'git_refs_url'?: string;
'git_tags_url'?: string;
'hooks_url'?: string;
'html_url'?: string;
'id'?: number;
'issue_comment_url'?: string;
'issue_events_url'?: string;
'issues_url'?: string;
'keys_url'?: string;
'labels_url'?: string;
'languages_url'?: string;
'merges_url'?: string;
'milestones_url'?: string;
'name'?: string;
'node_id'?: string;
'notifications_url'?: string;
'owner'?: {
'avatar_url'?: string;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'url'?: string;
};
'private'?: boolean;
'pulls_url'?: string;
'releases_url'?: string;
'stargazers_url'?: string;
'statuses_url'?: string;
'subscribers_url'?: string;
'subscription_url'?: string;
'tags_url'?: string;
'teams_url'?: string;
'trees_url'?: string;
'url'?: string;
};
'head_sha': string;
'html_url': string;
'id': number;
'jobs_url'?: string;
'logs_url'?: string;
'name': string;
'node_id': string;
'path': string;
'previous_attempt_url'?: any | null;
'pull_requests': Array<{
'base': {
'ref': string;
'repo': {
'id': number;
'name': string;
'url': string;
};
'sha': string;
};
'head': {
'ref': string;
'repo': {
'id': number;
'name': string;
'url': string;
};
'sha': string;
};
'id': number;
'number': number;
'url': string;
}>;
'referenced_workflows'?: (Array<{
'path': string;
'ref'?: string;
'sha': string;
}>) | null;
'repository'?: {
'archive_url'?: string;
'assignees_url'?: string;
'blobs_url'?: string;
'branches_url'?: string;
'collaborators_url'?: string;
'comments_url'?: string;
'commits_url'?: string;
'compare_url'?: string;
'contents_url'?: string;
'contributors_url'?: string;
'deployments_url'?: string;
'description'?: any | null;
'downloads_url'?: string;
'events_url'?: string;
'fork'?: boolean;
'forks_url'?: string;
'full_name'?: string;
'git_commits_url'?: string;
'git_refs_url'?: string;
'git_tags_url'?: string;
'hooks_url'?: string;
'html_url'?: string;
'id'?: number;
'issue_comment_url'?: string;
'issue_events_url'?: string;
'issues_url'?: string;
'keys_url'?: string;
'labels_url'?: string;
'languages_url'?: string;
'merges_url'?: string;
'milestones_url'?: string;
'name'?: string;
'node_id'?: string;
'notifications_url'?: string;
'owner'?: {
'avatar_url'?: string;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'url'?: string;
};
'private'?: boolean;
'pulls_url'?: string;
'releases_url'?: string;
'stargazers_url'?: string;
'statuses_url'?: string;
'subscribers_url'?: string;
'subscription_url'?: string;
'tags_url'?: string;
'teams_url'?: string;
'trees_url'?: string;
'url'?: string;
};
'rerun_url'?: string;
'run_attempt': number;
'run_number': number;
'run_started_at': string;
'status': 'requested' | 'in_progress' | 'completed' | 'queued' | 'waiting' | 'pending';
'triggering_actor': {
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
'updated_at': string;
'url': string;
'workflow_id': number;
'workflow_url'?: string;
};
}
