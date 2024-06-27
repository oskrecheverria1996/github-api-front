/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationRole } from '../../models/organization-role';

export interface OrgsCreateCustomOrganizationRole$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
      body: {

/**
 * The name of the custom role.
 */
'name': string;

/**
 * A short description about the intended usage of this role or what permissions it grants.
 */
'description'?: string;

/**
 * A list of additional permissions included in this role.
 */
'permissions': Array<string>;
}
}

export function orgsCreateCustomOrganizationRole(http: HttpClient, rootUrl: string, params: OrgsCreateCustomOrganizationRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
  const rb = new RequestBuilder(rootUrl, orgsCreateCustomOrganizationRole.PATH, 'post');
  if (params) {
    rb.path('org', params.org, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrganizationRole>;
    })
  );
}

orgsCreateCustomOrganizationRole.PATH = '/orgs/{org}/organization-roles';
