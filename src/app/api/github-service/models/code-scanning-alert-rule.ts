/* tslint:disable */
/* eslint-disable */
export interface CodeScanningAlertRule {

  /**
   * A short description of the rule used to detect the alert.
   */
  description?: string;

  /**
   * description of the rule used to detect the alert.
   */
  full_description?: string;

  /**
   * Detailed documentation for the rule as GitHub Flavored Markdown.
   */
  help?: string | null;

  /**
   * A link to the documentation for the rule used to detect the alert.
   */
  help_uri?: string | null;

  /**
   * A unique identifier for the rule used to detect the alert.
   */
  id?: string | null;

  /**
   * The name of the rule used to detect the alert.
   */
  name?: string;

  /**
   * The security severity of the alert.
   */
  security_severity_level?: ('low' | 'medium' | 'high' | 'critical') | null;

  /**
   * The severity of the alert.
   */
  severity?: ('none' | 'note' | 'warning' | 'error') | null;

  /**
   * A set of tags applicable for the rule.
   */
  tags?: Array<string> | null;
}
