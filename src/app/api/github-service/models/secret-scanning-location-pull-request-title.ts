/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'pull_request_title' secret scanning location type. This location type shows that a secret was detected in the title of a pull request.
 */
export interface SecretScanningLocationPullRequestTitle {

  /**
   * The API URL to get the pull request where the secret was detected.
   */
  pull_request_title_url: string;
}
