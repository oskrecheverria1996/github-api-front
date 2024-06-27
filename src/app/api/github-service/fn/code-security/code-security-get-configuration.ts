/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityConfiguration } from '../../models/code-security-configuration';

export interface CodeSecurityGetConfiguration$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the code security configuration.
 */
  configuration_id: number;
}

export function codeSecurityGetConfiguration(http: HttpClient, rootUrl: string, params: CodeSecurityGetConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityConfiguration>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityGetConfiguration.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('configuration_id', params.configuration_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodeSecurityConfiguration>;
    })
  );
}

codeSecurityGetConfiguration.PATH = '/orgs/{org}/code-security/configurations/{configuration_id}';
