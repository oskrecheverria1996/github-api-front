/* tslint:disable */
/* eslint-disable */
import { CodeScanningVariantAnalysisRepository } from '../models/code-scanning-variant-analysis-repository';
export interface CodeScanningVariantAnalysisSkippedRepoGroup {

  /**
   * A list of repositories that were skipped. This list may not include all repositories that were skipped. This is only available when the repository was found and the user has access to it.
   */
  repositories: Array<CodeScanningVariantAnalysisRepository>;

  /**
   * The total number of repositories that were skipped for this reason.
   */
  repository_count: number;
}
