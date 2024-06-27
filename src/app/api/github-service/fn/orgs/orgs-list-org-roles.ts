/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationRole } from '../../models/organization-role';

export interface OrgsListOrgRoles$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
}

export function orgsListOrgRoles(http: HttpClient, rootUrl: string, params: OrgsListOrgRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * The total number of organization roles available to the organization.
 */
'total_count'?: number;

/**
 * The list of organization roles available to the organization.
 */
'roles'?: Array<OrganizationRole>;
}>> {
  const rb = new RequestBuilder(rootUrl, orgsListOrgRoles.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * The total number of organization roles available to the organization.
       */
      'total_count'?: number;
      
      /**
       * The list of organization roles available to the organization.
       */
      'roles'?: Array<OrganizationRole>;
      }>;
    })
  );
}

orgsListOrgRoles.PATH = '/orgs/{org}/organization-roles';
