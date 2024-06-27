/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'pull_request_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a pull request.
 */
export interface SecretScanningLocationPullRequestComment {

  /**
   * The API URL to get the pull request comment where the secret was detected.
   */
  pull_request_comment_url: string;
}
