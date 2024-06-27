/* tslint:disable */
/* eslint-disable */
import { CodeScanningAlertDismissedComment } from '../models/code-scanning-alert-dismissed-comment';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksCodeScanningCommitOid } from '../models/webhooks-code-scanning-commit-oid';
import { WebhooksCodeScanningRef } from '../models/webhooks-code-scanning-ref';
export interface WebhookCodeScanningAlertCreated {
  action: 'created';

  /**
   * The code scanning alert involved in the event.
   */
  alert: {

/**
 * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ.`
 */
'created_at': string | null;

/**
 * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
'dismissed_at': any | null;
'dismissed_by': any | null;
'dismissed_comment'?: CodeScanningAlertDismissedComment | null;

/**
 * The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
 */
'dismissed_reason': any | null;
'fixed_at'?: any | null;

/**
 * The GitHub URL of the alert resource.
 */
'html_url': string;
'instances_url'?: string;
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
'full_description'?: string;
'help'?: string | null;

/**
 * A link to the documentation for the rule used to detect the alert.
 */
'help_uri'?: string | null;

/**
 * A unique identifier for the rule used to detect the alert.
 */
'id': string;
'name'?: string;

/**
 * The severity of the alert.
 */
'severity': 'none' | 'note' | 'warning' | 'error' | 'null';
'tags'?: Array<string> | null;
};

/**
 * State of a code scanning alert.
 */
'state': 'open' | 'dismissed';
'tool': {
'guid'?: string | null;

/**
 * The name of the tool used to generate the code scanning analysis alert.
 */
'name': string;

/**
 * The version of the tool used to detect the alert.
 */
'version': string | null;
};
'updated_at'?: string | null;
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
