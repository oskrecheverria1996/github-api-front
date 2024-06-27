/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksNullableString } from '../models/webhooks-nullable-string';
export interface WebhookPush {

  /**
   * The SHA of the most recent commit on `ref` after the push.
   */
  after: string;
  base_ref: WebhooksNullableString | null;

  /**
   * The SHA of the most recent commit on `ref` before the push.
   */
  before: string;

  /**
   * An array of commit objects describing the pushed commits. (Pushed commits are all commits that are included in the `compare` between the `before` commit and the `after` commit.) The array includes a maximum of 2048 commits. If necessary, you can use the [Commits API](https://docs.github.com/rest/commits) to fetch additional commits.
   */
  commits: Array<{

/**
 * An array of files added in the commit. A maximum of 3000 changed files will be reported per commit.
 */
'added'?: Array<string>;

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

/**
 * Whether this commit is distinct from any that have been pushed before.
 */
'distinct': boolean;
'id': string;

/**
 * The commit message.
 */
'message': string;

/**
 * An array of files modified by the commit. A maximum of 3000 changed files will be reported per commit.
 */
'modified'?: Array<string>;

/**
 * An array of files removed in the commit. A maximum of 3000 changed files will be reported per commit.
 */
'removed'?: Array<string>;

/**
 * The ISO 8601 timestamp of the commit.
 */
'timestamp': string;
'tree_id': string;

/**
 * URL that points to the commit API resource.
 */
'url': string;
}>;

  /**
   * URL that shows the changes in this `ref` update, from the `before` commit to the `after` commit. For a newly created `ref` that is directly based on the default branch, this is the comparison between the head of the default branch and the `after` commit. Otherwise, this shows all commits until the `after` commit.
   */
  compare: string;

  /**
   * Whether this push created the `ref`.
   */
  created: boolean;

  /**
   * Whether this push deleted the `ref`.
   */
  deleted: boolean;
  enterprise?: EnterpriseWebhooks;

  /**
   * Whether this push was a force push of the `ref`.
   */
  forced: boolean;
  head_commit: {

/**
 * An array of files added in the commit.
 */
'added'?: Array<string>;

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

/**
 * Whether this commit is distinct from any that have been pushed before.
 */
'distinct': boolean;
'id': string;

/**
 * The commit message.
 */
'message': string;

/**
 * An array of files modified by the commit.
 */
'modified'?: Array<string>;

/**
 * An array of files removed in the commit.
 */
'removed'?: Array<string>;

/**
 * The ISO 8601 timestamp of the commit.
 */
'timestamp': string;
'tree_id': string;

/**
 * URL that points to the commit API resource.
 */
'url': string;
};
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;

  /**
   * Metaproperties for Git author/committer information.
   */
  pusher: {
'date'?: string;
'email'?: string | null;

/**
 * The git author's name.
 */
'name': string;
'username'?: string;
};

  /**
   * The full git ref that was pushed. Example: `refs/heads/main` or `refs/tags/v3.14.1`.
   */
  ref: string;

  /**
   * A git repository
   */
  repository: {

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
  sender?: SimpleUserWebhooks;
}
