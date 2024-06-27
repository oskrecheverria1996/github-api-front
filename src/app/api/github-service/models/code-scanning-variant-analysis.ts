/* tslint:disable */
/* eslint-disable */
import { CodeScanningVariantAnalysisLanguage } from '../models/code-scanning-variant-analysis-language';
import { CodeScanningVariantAnalysisRepository } from '../models/code-scanning-variant-analysis-repository';
import { CodeScanningVariantAnalysisSkippedRepoGroup } from '../models/code-scanning-variant-analysis-skipped-repo-group';
import { CodeScanningVariantAnalysisStatus } from '../models/code-scanning-variant-analysis-status';
import { SimpleRepository } from '../models/simple-repository';
import { SimpleUser } from '../models/simple-user';

/**
 * A run of a CodeQL query against one or more repositories.
 */
export interface CodeScanningVariantAnalysis {

  /**
   * The GitHub Actions workflow run used to execute this variant analysis. This is only available if the workflow run has started.
   */
  actions_workflow_run_id?: number;
  actor: SimpleUser;

  /**
   * The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. Will be null if the variant analysis has not yet completed or this information is not available.
   */
  completed_at?: string | null;
  controller_repo: SimpleRepository;

  /**
   * The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  created_at?: string;

  /**
   * The reason for a failure of the variant analysis. This is only available if the variant analysis has failed.
   */
  failure_reason?: 'no_repos_queried' | 'actions_workflow_run_failed' | 'internal_error';

  /**
   * The ID of the variant analysis.
   */
  id: number;
  query_language: CodeScanningVariantAnalysisLanguage;

  /**
   * The download url for the query pack.
   */
  query_pack_url: string;
  scanned_repositories?: Array<{
'repository': CodeScanningVariantAnalysisRepository;
'analysis_status': CodeScanningVariantAnalysisStatus;

/**
 * The number of results in the case of a successful analysis. This is only available for successful analyses.
 */
'result_count'?: number;

/**
 * The size of the artifact. This is only available for successful analyses.
 */
'artifact_size_in_bytes'?: number;

/**
 * The reason of the failure of this repo task. This is only available if the repository task has failed.
 */
'failure_message'?: string;
}>;

  /**
   * Information about repositories that were skipped from processing. This information is only available to the user that initiated the variant analysis.
   */
  skipped_repositories?: {
'access_mismatch_repos': CodeScanningVariantAnalysisSkippedRepoGroup;
'not_found_repos': {

/**
 * The total number of repositories that were skipped for this reason.
 */
'repository_count': number;

/**
 * A list of full repository names that were skipped. This list may not include all repositories that were skipped.
 */
'repository_full_names': Array<string>;
};
'no_codeql_db_repos': CodeScanningVariantAnalysisSkippedRepoGroup;
'over_limit_repos': CodeScanningVariantAnalysisSkippedRepoGroup;
};
  status: 'in_progress' | 'succeeded' | 'failed' | 'cancelled';

  /**
   * The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  updated_at?: string;
}
