/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrgsRemoveCustomProperty$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The custom property name. The name is case sensitive.
 */
  custom_property_name: string;
}

export function orgsRemoveCustomProperty(http: HttpClient, rootUrl: string, params: OrgsRemoveCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, orgsRemoveCustomProperty.PATH, 'delete');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('custom_property_name', params.custom_property_name, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

orgsRemoveCustomProperty.PATH = '/orgs/{org}/properties/schema/{custom_property_name}';
