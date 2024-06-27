/* tslint:disable */
/* eslint-disable */

/**
 * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
 */
export interface CodespaceExportDetails {

  /**
   * Name of the exported branch
   */
  branch?: string | null;

  /**
   * Completion time of the last export operation
   */
  completed_at?: string | null;

  /**
   * Url for fetching export details
   */
  export_url?: string;

  /**
   * Web url for the exported branch
   */
  html_url?: string | null;

  /**
   * Id for the export details
   */
  id?: string;

  /**
   * Git commit SHA of the exported branch
   */
  sha?: string | null;

  /**
   * State of the latest export
   */
  state?: string | null;
}
