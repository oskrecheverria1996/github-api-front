/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationRole } from '../../models/organization-role';

export interface OrgsGetOrgRole$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the role.
 */
  role_id: number;
}

export function orgsGetOrgRole(http: HttpClient, rootUrl: string, params: OrgsGetOrgRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
  const rb = new RequestBuilder(rootUrl, orgsGetOrgRole.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('role_id', params.role_id, {});
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

orgsGetOrgRole.PATH = '/orgs/{org}/organization-roles/{role_id}';
