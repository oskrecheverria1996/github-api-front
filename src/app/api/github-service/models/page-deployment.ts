/* tslint:disable */
/* eslint-disable */

/**
 * The GitHub Pages deployment status.
 */
export interface PageDeployment {

  /**
   * The ID of the GitHub Pages deployment. This is the Git SHA of the deployed commit.
   */
  id: (number | string);

  /**
   * The URI to the deployed GitHub Pages.
   */
  page_url: string;

  /**
   * The URI to the deployed GitHub Pages preview.
   */
  preview_url?: string;

  /**
   * The URI to monitor GitHub Pages deployment status.
   */
  status_url: string;
}
