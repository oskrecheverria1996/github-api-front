/* tslint:disable */
/* eslint-disable */
import { AlertCreatedAt } from '../models/alert-created-at';
import { AlertHtmlUrl } from '../models/alert-html-url';
import { AlertNumber } from '../models/alert-number';
import { AlertUrl } from '../models/alert-url';
import { NullableAlertUpdatedAt } from '../models/nullable-alert-updated-at';
import { NullableSimpleUser } from '../models/nullable-simple-user';
import { SecretScanningAlertResolutionWebhook } from '../models/secret-scanning-alert-resolution-webhook';
export interface SecretScanningAlertWebhook {
  created_at?: AlertCreatedAt;
  html_url?: AlertHtmlUrl;

  /**
   * The REST API URL of the code locations for this alert.
   */
  locations_url?: string;
  number?: AlertNumber;

  /**
   * Whether push protection was bypassed for the detected secret.
   */
  push_protection_bypassed?: boolean | null;

  /**
   * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  push_protection_bypassed_at?: string | null;
  push_protection_bypassed_by?: NullableSimpleUser | null;
  resolution?: SecretScanningAlertResolutionWebhook | null;

  /**
   * An optional comment to resolve an alert.
   */
  resolution_comment?: string | null;

  /**
   * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  resolved_at?: string | null;
  resolved_by?: NullableSimpleUser | null;

  /**
   * The type of secret that secret scanning detected.
   */
  secret_type?: string;

  /**
   * User-friendly name for the detected secret, matching the `secret_type`.
   * For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
   */
  secret_type_display_name?: string;
  updated_at?: NullableAlertUpdatedAt | null;
  url?: AlertUrl;

  /**
   * The token status as of the latest validity check.
   */
  validity?: 'active' | 'inactive' | 'unknown';
}
