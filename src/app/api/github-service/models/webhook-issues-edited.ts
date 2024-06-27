/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksLabel } from '../models/webhooks-label';
export interface WebhookIssuesEdited {
  action: 'edited';

  /**
   * The changes to the issue.
   */
  changes: {
'body'?: {

/**
 * The previous version of the body.
 */
'from': string;
};
'title'?: {

/**
 * The previous version of the title.
 */
'from': string;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;

  /**
   * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
   */
  issue: {
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

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
'performed_via_github_app'?: {
'created_at': string | null;
'description': string | null;

/**
 * The list of events for the GitHub app
 */
'events'?: Array<'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'content_reference' | 'create' | 'delete' | 'deployment' | 'deployment_review' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'milestone' | 'organization' | 'org_block' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_dispatch' | 'secret_scanning_alert' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_dispatch' | 'workflow_run' | 'security_and_analysis' | 'pull_request_review_thread' | 'reminder'>;
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
'type'?: 'Bot' | 'User' | 'Organization' | 'Mannequin';
'url'?: string;
};
};
  label?: WebhooksLabel;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
