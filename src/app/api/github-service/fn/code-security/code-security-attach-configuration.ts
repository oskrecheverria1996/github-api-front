/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CodeSecurityAttachConfiguration$Params {

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
 * The type of repositories to attach the configuration to. `selected` means the configuration will be attached to only the repositories specified by `selected_repository_ids`
 */
'scope': 'all' | 'public' | 'private_or_internal' | 'selected';

/**
 * An array of repository IDs to attach the configuration to. You can only provide a list of repository ids when the `scope` is set to `selected`.
 */
'selected_repository_ids'?: Array<number>;
}
}

export function codeSecurityAttachConfiguration(http: HttpClient, rootUrl: string, params: CodeSecurityAttachConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityAttachConfiguration.PATH, 'post');
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
      }>;
    })
  );
}

codeSecurityAttachConfiguration.PATH = '/orgs/{org}/code-security/configurations/{configuration_id}/attach';
