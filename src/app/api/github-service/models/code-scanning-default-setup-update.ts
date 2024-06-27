/* tslint:disable */
/* eslint-disable */

/**
 * Configuration for code scanning default setup.
 */
export interface CodeScanningDefaultSetupUpdate {

  /**
   * CodeQL languages to be analyzed.
   */
  languages?: Array<'c-cpp' | 'csharp' | 'go' | 'java-kotlin' | 'javascript-typescript' | 'python' | 'ruby' | 'swift'>;

  /**
   * CodeQL query suite to be used.
   */
  query_suite?: 'default' | 'extended';

  /**
   * The desired state of code scanning default setup.
   */
  state?: 'configured' | 'not-configured';
}
