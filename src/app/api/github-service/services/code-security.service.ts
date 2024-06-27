/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CodeSecurityConfiguration } from '../models/code-security-configuration';
import { CodeSecurityConfigurationRepositories } from '../models/code-security-configuration-repositories';
import { CodeSecurityDefaultConfigurations } from '../models/code-security-default-configurations';
import { codeSecurityAttachConfiguration } from '../fn/code-security/code-security-attach-configuration';
import { CodeSecurityAttachConfiguration$Params } from '../fn/code-security/code-security-attach-configuration';
import { codeSecurityCreateConfiguration } from '../fn/code-security/code-security-create-configuration';
import { CodeSecurityCreateConfiguration$Params } from '../fn/code-security/code-security-create-configuration';
import { codeSecurityDeleteConfiguration } from '../fn/code-security/code-security-delete-configuration';
import { CodeSecurityDeleteConfiguration$Params } from '../fn/code-security/code-security-delete-configuration';
import { codeSecurityGetConfiguration } from '../fn/code-security/code-security-get-configuration';
import { CodeSecurityGetConfiguration$Params } from '../fn/code-security/code-security-get-configuration';
import { codeSecurityGetConfigurationsForOrg } from '../fn/code-security/code-security-get-configurations-for-org';
import { CodeSecurityGetConfigurationsForOrg$Params } from '../fn/code-security/code-security-get-configurations-for-org';
import { codeSecurityGetDefaultConfigurations } from '../fn/code-security/code-security-get-default-configurations';
import { CodeSecurityGetDefaultConfigurations$Params } from '../fn/code-security/code-security-get-default-configurations';
import { codeSecurityGetRepositoriesForConfiguration } from '../fn/code-security/code-security-get-repositories-for-configuration';
import { CodeSecurityGetRepositoriesForConfiguration$Params } from '../fn/code-security/code-security-get-repositories-for-configuration';
import { codeSecuritySetConfigurationAsDefault } from '../fn/code-security/code-security-set-configuration-as-default';
import { CodeSecuritySetConfigurationAsDefault$Params } from '../fn/code-security/code-security-set-configuration-as-default';
import { codeSecurityUpdateConfiguration } from '../fn/code-security/code-security-update-configuration';
import { CodeSecurityUpdateConfiguration$Params } from '../fn/code-security/code-security-update-configuration';


/**
 * Endpoints to manage Code security using the REST API.
 */
@Injectable({ providedIn: 'root' })
export class CodeSecurityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `codeSecurityGetConfigurationsForOrg()` */
  static readonly CodeSecurityGetConfigurationsForOrgPath = '/orgs/{org}/code-security/configurations';

  /**
   * Get code security configurations for an organization.
   *
   * Lists all code security configurations available in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityGetConfigurationsForOrg()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetConfigurationsForOrg$Response(params: CodeSecurityGetConfigurationsForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CodeSecurityConfiguration>>> {
    return codeSecurityGetConfigurationsForOrg(this.http, this.rootUrl, params, context);
  }

  /**
   * Get code security configurations for an organization.
   *
   * Lists all code security configurations available in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityGetConfigurationsForOrg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetConfigurationsForOrg(params: CodeSecurityGetConfigurationsForOrg$Params, context?: HttpContext): Observable<Array<CodeSecurityConfiguration>> {
    return this.codeSecurityGetConfigurationsForOrg$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CodeSecurityConfiguration>>): Array<CodeSecurityConfiguration> => r.body)
    );
  }

  /** Path part for operation `codeSecurityCreateConfiguration()` */
  static readonly CodeSecurityCreateConfigurationPath = '/orgs/{org}/code-security/configurations';

  /**
   * Create a code security configuration.
   *
   * Creates a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityCreateConfiguration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityCreateConfiguration$Response(params: CodeSecurityCreateConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityConfiguration>> {
    return codeSecurityCreateConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a code security configuration.
   *
   * Creates a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityCreateConfiguration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityCreateConfiguration(params: CodeSecurityCreateConfiguration$Params, context?: HttpContext): Observable<CodeSecurityConfiguration> {
    return this.codeSecurityCreateConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<CodeSecurityConfiguration>): CodeSecurityConfiguration => r.body)
    );
  }

  /** Path part for operation `codeSecurityGetDefaultConfigurations()` */
  static readonly CodeSecurityGetDefaultConfigurationsPath = '/orgs/{org}/code-security/configurations/defaults';

  /**
   * Get default code security configurations.
   *
   * Lists the default code security configurations for an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityGetDefaultConfigurations()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetDefaultConfigurations$Response(params: CodeSecurityGetDefaultConfigurations$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityDefaultConfigurations>> {
    return codeSecurityGetDefaultConfigurations(this.http, this.rootUrl, params, context);
  }

  /**
   * Get default code security configurations.
   *
   * Lists the default code security configurations for an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityGetDefaultConfigurations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetDefaultConfigurations(params: CodeSecurityGetDefaultConfigurations$Params, context?: HttpContext): Observable<CodeSecurityDefaultConfigurations> {
    return this.codeSecurityGetDefaultConfigurations$Response(params, context).pipe(
      map((r: StrictHttpResponse<CodeSecurityDefaultConfigurations>): CodeSecurityDefaultConfigurations => r.body)
    );
  }

  /** Path part for operation `codeSecurityGetConfiguration()` */
  static readonly CodeSecurityGetConfigurationPath = '/orgs/{org}/code-security/configurations/{configuration_id}';

  /**
   * Get a code security configuration.
   *
   * Gets a code security configuration available in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityGetConfiguration()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetConfiguration$Response(params: CodeSecurityGetConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityConfiguration>> {
    return codeSecurityGetConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a code security configuration.
   *
   * Gets a code security configuration available in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityGetConfiguration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetConfiguration(params: CodeSecurityGetConfiguration$Params, context?: HttpContext): Observable<CodeSecurityConfiguration> {
    return this.codeSecurityGetConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<CodeSecurityConfiguration>): CodeSecurityConfiguration => r.body)
    );
  }

  /** Path part for operation `codeSecurityDeleteConfiguration()` */
  static readonly CodeSecurityDeleteConfigurationPath = '/orgs/{org}/code-security/configurations/{configuration_id}';

  /**
   * Delete a code security configuration.
   *
   * Deletes the desired code security configuration from an organization.
   * Repositories attached to the configuration will retain their settings but will no longer be associated with
   * the configuration.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityDeleteConfiguration()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityDeleteConfiguration$Response(params: CodeSecurityDeleteConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return codeSecurityDeleteConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a code security configuration.
   *
   * Deletes the desired code security configuration from an organization.
   * Repositories attached to the configuration will retain their settings but will no longer be associated with
   * the configuration.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityDeleteConfiguration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityDeleteConfiguration(params: CodeSecurityDeleteConfiguration$Params, context?: HttpContext): Observable<void> {
    return this.codeSecurityDeleteConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `codeSecurityUpdateConfiguration()` */
  static readonly CodeSecurityUpdateConfigurationPath = '/orgs/{org}/code-security/configurations/{configuration_id}';

  /**
   * Update a code security configuration.
   *
   * Updates a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityUpdateConfiguration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityUpdateConfiguration$Response(params: CodeSecurityUpdateConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityConfiguration>> {
    return codeSecurityUpdateConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a code security configuration.
   *
   * Updates a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityUpdateConfiguration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityUpdateConfiguration(params: CodeSecurityUpdateConfiguration$Params, context?: HttpContext): Observable<CodeSecurityConfiguration> {
    return this.codeSecurityUpdateConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<CodeSecurityConfiguration>): CodeSecurityConfiguration => r.body)
    );
  }

  /** Path part for operation `codeSecurityAttachConfiguration()` */
  static readonly CodeSecurityAttachConfigurationPath = '/orgs/{org}/code-security/configurations/{configuration_id}/attach';

  /**
   * Attach a configuration to repositories.
   *
   * Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.
   *
   * If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityAttachConfiguration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityAttachConfiguration$Response(params: CodeSecurityAttachConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return codeSecurityAttachConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Attach a configuration to repositories.
   *
   * Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.
   *
   * If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityAttachConfiguration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecurityAttachConfiguration(params: CodeSecurityAttachConfiguration$Params, context?: HttpContext): Observable<{
}> {
    return this.codeSecurityAttachConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `codeSecuritySetConfigurationAsDefault()` */
  static readonly CodeSecuritySetConfigurationAsDefaultPath = '/orgs/{org}/code-security/configurations/{configuration_id}/defaults';

  /**
   * Set a code security configuration as a default for an organization.
   *
   * Sets a code security configuration as a default to be applied to new repositories in your organization.
   *
   * This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecuritySetConfigurationAsDefault()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecuritySetConfigurationAsDefault$Response(params: CodeSecuritySetConfigurationAsDefault$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Specifies which types of repository this security configuration is applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
'configuration'?: CodeSecurityConfiguration;
}>> {
    return codeSecuritySetConfigurationAsDefault(this.http, this.rootUrl, params, context);
  }

  /**
   * Set a code security configuration as a default for an organization.
   *
   * Sets a code security configuration as a default to be applied to new repositories in your organization.
   *
   * This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecuritySetConfigurationAsDefault$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  codeSecuritySetConfigurationAsDefault(params: CodeSecuritySetConfigurationAsDefault$Params, context?: HttpContext): Observable<{

/**
 * Specifies which types of repository this security configuration is applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
'configuration'?: CodeSecurityConfiguration;
}> {
    return this.codeSecuritySetConfigurationAsDefault$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Specifies which types of repository this security configuration is applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
'configuration'?: CodeSecurityConfiguration;
}>): {

/**
 * Specifies which types of repository this security configuration is applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
'configuration'?: CodeSecurityConfiguration;
} => r.body)
    );
  }

  /** Path part for operation `codeSecurityGetRepositoriesForConfiguration()` */
  static readonly CodeSecurityGetRepositoriesForConfigurationPath = '/orgs/{org}/code-security/configurations/{configuration_id}/repositories';

  /**
   * Get repositories associated with a code security configuration.
   *
   * Lists the repositories associated with a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `codeSecurityGetRepositoriesForConfiguration()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetRepositoriesForConfiguration$Response(params: CodeSecurityGetRepositoriesForConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CodeSecurityConfigurationRepositories>>> {
    return codeSecurityGetRepositoriesForConfiguration(this.http, this.rootUrl, params, context);
  }

  /**
   * Get repositories associated with a code security configuration.
   *
   * Lists the repositories associated with a code security configuration in an organization.
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `codeSecurityGetRepositoriesForConfiguration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  codeSecurityGetRepositoriesForConfiguration(params: CodeSecurityGetRepositoriesForConfiguration$Params, context?: HttpContext): Observable<Array<CodeSecurityConfigurationRepositories>> {
    return this.codeSecurityGetRepositoriesForConfiguration$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CodeSecurityConfigurationRepositories>>): Array<CodeSecurityConfigurationRepositories> => r.body)
    );
  }

}
