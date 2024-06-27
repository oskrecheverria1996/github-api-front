/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'pull_request_body' secret scanning location type. This location type shows that a secret was detected in the body of a pull request.
 */
export interface SecretScanningLocationPullRequestBody {

  /**
   * The API URL to get the pull request where the secret was detected.
   */
  pull_request_body_url: string;
}
