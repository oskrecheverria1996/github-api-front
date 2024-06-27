/* tslint:disable */
/* eslint-disable */

/**
 * Represents a 'wiki_commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository wiki.
 */
export interface SecretScanningLocationWikiCommit {

  /**
   * SHA-1 hash ID of the associated blob
   */
  blob_sha: string;

  /**
   * SHA-1 hash ID of the associated commit
   */
  commit_sha: string;

  /**
   * The GitHub URL to get the associated wiki commit
   */
  commit_url: string;

  /**
   * The column at which the secret ends within the end line when the file is interpreted as 8-bit ASCII.
   */
  end_column: number;

  /**
   * Line number at which the secret ends in the file
   */
  end_line: number;

  /**
   * The GitHub URL to get the associated wiki page
   */
  page_url: string;

  /**
   * The file path of the wiki page
   */
  path: string;

  /**
   * The column at which the secret starts within the start line when the file is interpreted as 8-bit ASCII.
   */
  start_column: number;

  /**
   * Line number at which the secret starts in the file
   */
  start_line: number;
}
