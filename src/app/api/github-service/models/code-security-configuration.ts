/* tslint:disable */
/* eslint-disable */

/**
 * A code security configuration
 */
export interface CodeSecurityConfiguration {

  /**
   * The enablement status of GitHub Advanced Security
   */
  advanced_security?: 'enabled' | 'disabled';

  /**
   * The enablement status of code scanning default setup
   */
  code_scanning_default_setup?: 'enabled' | 'disabled' | 'not_set';
  created_at?: string;

  /**
   * The enablement status of Dependabot alerts
   */
  dependabot_alerts?: 'enabled' | 'disabled' | 'not_set';

  /**
   * The enablement status of Dependabot security updates
   */
  dependabot_security_updates?: 'enabled' | 'disabled' | 'not_set';

  /**
   * The enablement status of Dependency Graph
   */
  dependency_graph?: 'enabled' | 'disabled' | 'not_set';

  /**
   * A description of the code security configuration
   */
  description?: string;

  /**
   * The URL of the configuration
   */
  html_url?: string;

  /**
   * The ID of the code security configuration
   */
  id?: number;

  /**
   * The name of the code security configuration. Must be unique within the organization.
   */
  name?: string;

  /**
   * The enablement status of private vulnerability reporting
   */
  private_vulnerability_reporting?: 'enabled' | 'disabled' | 'not_set';

  /**
   * The enablement status of secret scanning
   */
  secret_scanning?: 'enabled' | 'disabled' | 'not_set';

  /**
   * The enablement status of secret scanning push protection
   */
  secret_scanning_push_protection?: 'enabled' | 'disabled' | 'not_set';

  /**
   * The type of the code security configuration.
   */
  target_type?: 'global' | 'organization';
  updated_at?: string;

  /**
   * The URL of the configuration
   */
  url?: string;
}
