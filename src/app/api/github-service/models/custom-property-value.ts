/* tslint:disable */
/* eslint-disable */

/**
 * Custom property name and associated value
 */
export interface CustomPropertyValue {

  /**
   * The name of the property
   */
  property_name: string;

  /**
   * The value assigned to the property
   */
  value: ((string | Array<string>)) | null;
}
