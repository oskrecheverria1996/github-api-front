/* tslint:disable */
/* eslint-disable */

/**
 * Repository Identifier
 */
export interface CodeScanningVariantAnalysisRepository {

  /**
   * The full, globally unique, name of the repository.
   */
  full_name: string;

  /**
   * A unique identifier of the repository.
   */
  id: number;

  /**
   * The name of the repository.
   */
  name: string;

  /**
   * Whether the repository is private.
   */
  private: boolean;
  stargazers_count: number;
  updated_at: string | null;
}
