/* tslint:disable */
/* eslint-disable */
export interface WebhooksLabel {

  /**
   * 6-character hex code, without the leading #, identifying the color
   */
  color: string;
  default: boolean;
  description: string | null;
  id: number;

  /**
   * The name of the label.
   */
  name: string;
  node_id: string;

  /**
   * URL for the label
   */
  url: string;
}
