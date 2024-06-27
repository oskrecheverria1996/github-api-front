/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'pull_request_review' secret scanning location type. This location type shows that a secret was detected in a review on a pull request.
 */
export interface SecretScanningLocationPullRequestReview {

  /**
   * The API URL to get the pull request review where the secret was detected.
   */
  pull_request_review_url: string;
}
