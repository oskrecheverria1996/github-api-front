/* tslint:disable */
/* eslint-disable */
import { CodeSecurityConfiguration } from '../models/code-security-configuration';

/**
 * A list of default code security configurations
 */
export type CodeSecurityDefaultConfigurations = Array<{

/**
 * The visibility of newly created repositories for which the code security configuration will be applied to by default
 */
'default_for_new_repos'?: 'public' | 'private_and_internal' | 'all';
'configuration'?: CodeSecurityConfiguration;
}>;
