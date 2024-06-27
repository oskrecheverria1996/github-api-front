/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationRole } from '../../models/organization-role';

export interface OrgsPatchCustomOrganizationRole$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the role.
 */
  role_id: number;
      body: {

/**
 * The name of the custom role.
 */
'name'?: string;

/**
 * A short description about the intended usage of this role or what permissions it grants.
 */
'description'?: string;

/**
 * A list of additional permissions included in this role.
 */
'permissions'?: Array<string>;
}
}

export function orgsPatchCustomOrganizationRole(http: HttpClient, rootUrl: string, params: OrgsPatchCustomOrganizationRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
  const rb = new RequestBuilder(rootUrl, orgsPatchCustomOrganizationRole.PATH, 'patch');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('role_id', params.role_id, {});
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

orgsPatchCustomOrganizationRole.PATH = '/orgs/{org}/organization-roles/{role_id}';
