/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrgCustomProperty } from '../../models/org-custom-property';

export interface OrgsCreateOrUpdateCustomProperties$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
      body: {

/**
 * The array of custom properties to create or update.
 */
'properties': Array<OrgCustomProperty>;
}
}

export function orgsCreateOrUpdateCustomProperties(http: HttpClient, rootUrl: string, params: OrgsCreateOrUpdateCustomProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgCustomProperty>>> {
  const rb = new RequestBuilder(rootUrl, orgsCreateOrUpdateCustomProperties.PATH, 'patch');
  if (params) {
    rb.path('org', params.org, {});
    rb.body(params.body, 'application/json');
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

orgsCreateOrUpdateCustomProperties.PATH = '/orgs/{org}/properties/schema';
