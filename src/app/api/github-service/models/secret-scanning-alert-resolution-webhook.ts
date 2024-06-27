/* tslint:disable */
/* eslint-disable */

/**
 * The reason for resolving the alert.
 */
export enum SecretScanningAlertResolutionWebhook {
  FalsePositive = 'false_positive',
  WontFix = 'wont_fix',
  Revoked = 'revoked',
  UsedInTests = 'used_in_tests',
  PatternDeleted = 'pattern_deleted',
  PatternEdited = 'pattern_edited'
}
