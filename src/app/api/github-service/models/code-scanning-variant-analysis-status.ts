/* tslint:disable */
/* eslint-disable */

/**
 * The new status of the CodeQL variant analysis repository task.
 */
export enum CodeScanningVariantAnalysisStatus {
  Pending = 'pending',
  InProgress = 'in_progress',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Canceled = 'canceled',
  TimedOut = 'timed_out'
}
