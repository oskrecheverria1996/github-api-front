/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrgsRevokeAllOrgRolesTeam$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The slug of the team name.
 */
  team_slug: string;
}

export function orgsRevokeAllOrgRolesTeam(http: HttpClient, rootUrl: string, params: OrgsRevokeAllOrgRolesTeam$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, orgsRevokeAllOrgRolesTeam.PATH, 'delete');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('team_slug', params.team_slug, {});
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

orgsRevokeAllOrgRolesTeam.PATH = '/orgs/{org}/organization-roles/teams/{team_slug}';
