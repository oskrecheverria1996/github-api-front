/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookCheckSuiteRequested {
  action: 'requested';

  /**
   * The [check_suite](https://docs.github.com/rest/checks/suites#get-a-check-suite).
   */
  check_suite: {
'after': string | null;

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
'app': {
'created_at': string | null;
'description': string | null;

/**
 * The list of events for the GitHub app
 */
'events'?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'pull_request_review_thread' | 'workflow_job' | 'merge_queue_entry' | 'security_and_analysis' | 'secret_scanning_alert_location' | 'projects_v2_item' | 'merge_group' | 'repository_import'>;
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
'organization_projects'?: 'read' | 'write' | 'admin';
'organization_secrets'?: 'read' | 'write';
'organization_self_hosted_runners'?: 'read' | 'write';
'organization_user_blocking'?: 'read' | 'write';
'packages'?: 'read' | 'write';
'pages'?: 'read' | 'write';
'pull_requests'?: 'read' | 'write';
'repository_hooks'?: 'read' | 'write';
'repository_projects'?: 'read' | 'write' | 'admin';
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
'before': string | null;
'check_runs_url': string;

/**
 * The summary conclusion for all check runs that are part of the check suite. This value will be `null` until the check run has completed.
 */
'conclusion': 'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'null' | 'skipped';
'created_at': string;

/**
 * The head branch name the changes are on.
 */
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

/**
 * The SHA of the head commit that is being checked.
 */
'head_sha': string;
'id': number;
'latest_check_runs_count': number;
'node_id': string;

/**
 * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
 */
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
'rerequestable'?: boolean;
'runs_rerequestable'?: boolean;

/**
 * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
 */
'status': 'requested' | 'in_progress' | 'completed' | 'queued' | 'null';
'updated_at': string;

/**
 * URL that points to the check suite API resource.
 */
'url': string;
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
