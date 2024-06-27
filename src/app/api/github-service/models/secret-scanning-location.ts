/* tslint:disable */
/* eslint-disable */
import { SecretScanningLocationCommit } from '../models/secret-scanning-location-commit';
import { SecretScanningLocationDiscussionBody } from '../models/secret-scanning-location-discussion-body';
import { SecretScanningLocationDiscussionComment } from '../models/secret-scanning-location-discussion-comment';
import { SecretScanningLocationDiscussionTitle } from '../models/secret-scanning-location-discussion-title';
import { SecretScanningLocationIssueBody } from '../models/secret-scanning-location-issue-body';
import { SecretScanningLocationIssueComment } from '../models/secret-scanning-location-issue-comment';
import { SecretScanningLocationIssueTitle } from '../models/secret-scanning-location-issue-title';
import { SecretScanningLocationPullRequestBody } from '../models/secret-scanning-location-pull-request-body';
import { SecretScanningLocationPullRequestComment } from '../models/secret-scanning-location-pull-request-comment';
import { SecretScanningLocationPullRequestReview } from '../models/secret-scanning-location-pull-request-review';
import { SecretScanningLocationPullRequestReviewComment } from '../models/secret-scanning-location-pull-request-review-comment';
import { SecretScanningLocationPullRequestTitle } from '../models/secret-scanning-location-pull-request-title';
import { SecretScanningLocationWikiCommit } from '../models/secret-scanning-location-wiki-commit';
export interface SecretScanningLocation {
  details?: (SecretScanningLocationCommit | SecretScanningLocationWikiCommit | SecretScanningLocationIssueTitle | SecretScanningLocationIssueBody | SecretScanningLocationIssueComment | SecretScanningLocationDiscussionTitle | SecretScanningLocationDiscussionBody | SecretScanningLocationDiscussionComment | SecretScanningLocationPullRequestTitle | SecretScanningLocationPullRequestBody | SecretScanningLocationPullRequestComment | SecretScanningLocationPullRequestReview | SecretScanningLocationPullRequestReviewComment);

  /**
   * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues, pull requests, discussions), this field identifies the type of resource where the secret was found.
   */
  type?: 'commit' | 'wiki_commit' | 'issue_title' | 'issue_body' | 'issue_comment' | 'discussion_title' | 'discussion_body' | 'discussion_comment' | 'pull_request_title' | 'pull_request_body' | 'pull_request_comment' | 'pull_request_review' | 'pull_request_review_comment';
}
