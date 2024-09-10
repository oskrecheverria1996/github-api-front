/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrgCustomProperty } from '../../models/org-custom-property';

export interface OrgsGetAllCustomProperties$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
}

export function orgsGetAllCustomProperties(http: HttpClient, rootUrl: string, params: OrgsGetAllCustomProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgCustomProperty>>> {
  const rb = new RequestBuilder(rootUrl, orgsGetAllCustomProperties.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OrgCustomProperty>>;
    })
  );
}

orgsGetAllCustomProperties.PATH = '/orgs/{org}/properties/schema';