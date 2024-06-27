/* tslint:disable */
/* eslint-disable */

/**
 * Custom property defined on an organization
 */
export interface OrgCustomProperty {

  /**
   * An ordered list of the allowed values of the property.
   * The property can have up to 200 allowed values.
   */
  allowed_values?: Array<string> | null;

  /**
   * Default value of the property
   */
  default_value?: ((string | Array<string>)) | null;

  /**
   * Short description of the property
   */
  description?: string | null;

  /**
   * The name of the property
   */
  property_name: string;

  /**
   * Whether the property is required.
   */
  required?: boolean;

  /**
   * The type of the value for the property
   */
  value_type: 'string' | 'single_select' | 'multi_select' | 'true_false';

  /**
   * Who can edit the values of the property
   */
  values_editable_by?: ('org_actors' | 'org_and_repo_actors') | null;
}
