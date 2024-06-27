/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityDefaultConfigurations } from '../../models/code-security-default-configurations';

export interface CodeSecurityGetDefaultConfigurations$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
}

export function codeSecurityGetDefaultConfigurations(http: HttpClient, rootUrl: string, params: CodeSecurityGetDefaultConfigurations$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityDefaultConfigurations>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityGetDefaultConfigurations.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodeSecurityDefaultConfigurations>;
    })
  );
}

codeSecurityGetDefaultConfigurations.PATH = '/orgs/{org}/code-security/configurations/defaults';
