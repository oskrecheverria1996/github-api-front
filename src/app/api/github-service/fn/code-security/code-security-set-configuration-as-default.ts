/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityConfiguration } from '../../models/code-security-configuration';

export interface CodeSecuritySetConfigurationAsDefault$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the code security configuration.
 */
  configuration_id: number;
      body: {

/**
 * Specify which types of repository this security configuration should be applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
}
}

export function codeSecuritySetConfigurationAsDefault(http: HttpClient, rootUrl: string, params: CodeSecuritySetConfigurationAsDefault$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Specifies which types of repository this security configuration is applied to by default.
 */
'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
'configuration'?: CodeSecurityConfiguration;
}>> {
  const rb = new RequestBuilder(rootUrl, codeSecuritySetConfigurationAsDefault.PATH, 'put');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('configuration_id', params.configuration_id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * Specifies which types of repository this security configuration is applied to by default.
       */
      'default_for_new_repos'?: 'all' | 'none' | 'private_and_internal' | 'public';
      'configuration'?: CodeSecurityConfiguration;
      }>;
    })
  );
}

codeSecuritySetConfigurationAsDefault.PATH = '/orgs/{org}/code-security/configurations/{configuration_id}/defaults';
