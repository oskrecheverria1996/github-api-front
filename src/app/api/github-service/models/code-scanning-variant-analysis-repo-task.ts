/* tslint:disable */
/* eslint-disable */
import { CodeScanningVariantAnalysisStatus } from '../models/code-scanning-variant-analysis-status';
import { SimpleRepository } from '../models/simple-repository';
export interface CodeScanningVariantAnalysisRepoTask {
  analysis_status: CodeScanningVariantAnalysisStatus;

  /**
   * The size of the artifact. This is only available for successful analyses.
   */
  artifact_size_in_bytes?: number;

  /**
   * The URL of the artifact. This is only available for successful analyses.
   */
  artifact_url?: string;

  /**
   * The SHA of the commit the CodeQL database was built against. This is only available for successful analyses.
   */
  database_commit_sha?: string;

  /**
   * The reason of the failure of this repo task. This is only available if the repository task has failed.
   */
  failure_message?: string;
  repository: SimpleRepository;

  /**
   * The number of results in the case of a successful analysis. This is only available for successful analyses.
   */
  result_count?: number;

  /**
   * The source location prefix to use. This is only available for successful analyses.
   */
  source_location_prefix?: string;
}
