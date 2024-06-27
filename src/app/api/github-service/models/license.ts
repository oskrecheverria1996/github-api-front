/* tslint:disable */
/* eslint-disable */

/**
 * License
 */
export interface License {
  body: string;
  conditions: Array<string>;
  description: string;
  featured: boolean;
  html_url: string;
  implementation: string;
  key: string;
  limitations: Array<string>;
  name: string;
  node_id: string;
  permissions: Array<string>;
  spdx_id: string | null;
  url: string | null;
}
