/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksCodeScanningCommitOid } from '../models/webhooks-code-scanning-commit-oid';
import { WebhooksCodeScanningRef } from '../models/webhooks-code-scanning-ref';
export interface WebhookCodeScanningAlertAppearedInBranch {
  action: 'appeared_in_branch';

  /**
   * The code scanning alert involved in the event.
   */
  alert: {

/**
 * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ.`
 */
'created_at': string;

/**
 * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
'dismissed_at': string | null;
'dismissed_by': {
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
 * The reason for dismissing or closing the alert.
 */
'dismissed_reason': 'false positive' | 'won\'t fix' | 'used in tests' | 'null';

/**
 * The GitHub URL of the alert resource.
 */
'html_url': string;
'most_recent_instance'?: ({

/**
 * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
 */
'analysis_key': string;

/**
 * Identifies the configuration under which the analysis was executed.
 */
'category'?: string;
'classifications'?: Array<string>;
'commit_sha'?: string;

/**
 * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
 */
'environment': string;
'location'?: {
'end_column'?: number;
'end_line'?: number;
'path'?: string;
'start_column'?: number;
'start_line'?: number;
};
'message'?: {
'text'?: string;
};

/**
 * The full Git reference, formatted as `refs/heads/<branch name>`.
 */
'ref': string;

/**
 * State of a code scanning alert.
 */
'state': 'open' | 'dismissed' | 'fixed';
}) | null;

/**
 * The code scanning alert number.
 */
'number': number;
'rule': {

/**
 * A short description of the rule used to detect the alert.
 */
'description': string;

/**
 * A unique identifier for the rule used to detect the alert.
 */
'id': string;

/**
 * The severity of the alert.
 */
'severity': 'none' | 'note' | 'warning' | 'error' | 'null';
};

/**
 * State of a code scanning alert.
 */
'state': 'open' | 'dismissed' | 'fixed';
'tool': {

/**
 * The name of the tool used to generate the code scanning analysis alert.
 */
'name': string;

/**
 * The version of the tool used to detect the alert.
 */
'version': string | null;
};
'url': string;
};
  commit_oid: WebhooksCodeScanningCommitOid;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  ref: WebhooksCodeScanningRef;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
