/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomPropertyValue } from '../../models/custom-property-value';

export interface OrgsCreateOrUpdateCustomPropertiesValuesForRepos$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
      body: {

/**
 * The names of repositories that the custom property values will be applied to.
 */
'repository_names': Array<string>;

/**
 * List of custom property names and associated values to apply to the repositories.
 */
'properties': Array<CustomPropertyValue>;
}
}

export function orgsCreateOrUpdateCustomPropertiesValuesForRepos(http: HttpClient, rootUrl: string, params: OrgsCreateOrUpdateCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, orgsCreateOrUpdateCustomPropertiesValuesForRepos.PATH, 'patch');
  if (params) {
    rb.path('org', params.org, {});
    rb.body(params.body, 'application/json');
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

orgsCreateOrUpdateCustomPropertiesValuesForRepos.PATH = '/orgs/{org}/properties/values';
