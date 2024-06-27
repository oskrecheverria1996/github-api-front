/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamRoleAssignment } from '../../models/team-role-assignment';

export interface OrgsListOrgRoleTeams$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the role.
 */
  role_id: number;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function orgsListOrgRoleTeams(http: HttpClient, rootUrl: string, params: OrgsListOrgRoleTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TeamRoleAssignment>>> {
  const rb = new RequestBuilder(rootUrl, orgsListOrgRoleTeams.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('role_id', params.role_id, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TeamRoleAssignment>>;
    })
  );
}

orgsListOrgRoleTeams.PATH = '/orgs/{org}/organization-roles/{role_id}/teams';
