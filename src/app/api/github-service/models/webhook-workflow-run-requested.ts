/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksWorkflow } from '../models/webhooks-workflow';
export interface WebhookWorkflowRunRequested {
  action: 'requested';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  workflow: WebhooksWorkflow | null;
  workflow_run: {
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
'artifacts_url': string;
'cancel_url': string;
'check_suite_id': number;
'check_suite_node_id': string;
'check_suite_url': string;
'conclusion': 'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'null' | 'skipped' | 'startup_failure';
'created_at': string;
'event': string;
'head_branch': string | null;
'head_commit': {

/**
 * Metaproperties for Git author/committer information.
 */
'author': {
'date'?: string;
'email': string | null;

/**
 * The git author's name.
 */
'name': string;
'username'?: string;
};

/**
 * Metaproperties for Git author/committer information.
 */
'committer': {
'date'?: string;
'email': string | null;

/**
 * The git author's name.
 */
'name': string;
'username'?: string;
};
'id': string;
'message': string;
'timestamp': string;
'tree_id': string;
};
'head_repository': {
'archive_url': string;
'assignees_url': string;
'blobs_url': string;
'branches_url': string;
'collaborators_url': string;
'comments_url': string;
'commits_url': string;
'compare_url': string;
'contents_url': string;
'contributors_url': string;
'deployments_url': string;
'description': string | null;
'downloads_url': string;
'events_url': string;
'fork': boolean;
'forks_url': string;
'full_name': string;
'git_commits_url': string;
'git_refs_url': string;
'git_tags_url': string;
'hooks_url': string;
'html_url': string;

/**
 * Unique identifier of the repository
 */
'id': number;
'issue_comment_url': string;
'issue_events_url': string;
'issues_url': string;
'keys_url': string;
'labels_url': string;
'languages_url': string;
'merges_url': string;
'milestones_url': string;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;
'notifications_url': string;
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
 * Whether the repository is private or public.
 */
'private': boolean;
'pulls_url': string;
'releases_url': string;
'stargazers_url': string;
'statuses_url': string;
'subscribers_url': string;
'subscription_url': string;
'tags_url': string;
'teams_url': string;
'trees_url': string;
'url': string;
};
'head_sha': string;
'html_url': string;
'id': number;
'jobs_url': string;
'logs_url': string;
'name': string | null;
'node_id': string;
'path': string;
'previous_attempt_url': string | null;
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
'repository': {
'archive_url': string;
'assignees_url': string;
'blobs_url': string;
'branches_url': string;
'collaborators_url': string;
'comments_url': string;
'commits_url': string;
'compare_url': string;
'contents_url': string;
'contributors_url': string;
'deployments_url': string;
'description': string | null;
'downloads_url': string;
'events_url': string;
'fork': boolean;
'forks_url': string;
'full_name': string;
'git_commits_url': string;
'git_refs_url': string;
'git_tags_url': string;
'hooks_url': string;
'html_url': string;

/**
 * Unique identifier of the repository
 */
'id': number;
'issue_comment_url': string;
'issue_events_url': string;
'issues_url': string;
'keys_url': string;
'labels_url': string;
'languages_url': string;
'merges_url': string;
'milestones_url': string;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;
'notifications_url': string;
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
 * Whether the repository is private or public.
 */
'private': boolean;
'pulls_url': string;
'releases_url': string;
'stargazers_url': string;
'statuses_url': string;
'subscribers_url': string;
'subscription_url': string;
'tags_url': string;
'teams_url': string;
'trees_url': string;
'url': string;
};
'rerun_url': string;
'run_attempt': number;
'run_number': number;
'run_started_at': string;
'status': 'requested' | 'in_progress' | 'completed' | 'queued' | 'pending' | 'waiting';
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
'workflow_url': string;
'display_title': string;
};
}
