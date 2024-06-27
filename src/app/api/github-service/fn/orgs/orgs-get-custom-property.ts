/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrgCustomProperty } from '../../models/org-custom-property';

export interface OrgsGetCustomProperty$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The custom property name. The name is case sensitive.
 */
  custom_property_name: string;
}

export function orgsGetCustomProperty(http: HttpClient, rootUrl: string, params: OrgsGetCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgCustomProperty>> {
  const rb = new RequestBuilder(rootUrl, orgsGetCustomProperty.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('custom_property_name', params.custom_property_name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrgCustomProperty>;
    })
  );
}

orgsGetCustomProperty.PATH = '/orgs/{org}/properties/schema/{custom_property_name}';
