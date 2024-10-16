/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamProject } from '../../models/team-project';

export interface TeamsCheckPermissionsForProjectLegacy$Params {

/**
 * The unique identifier of the team.
 */
  team_id: number;

/**
 * The unique identifier of the project.
 */
  project_id: number;
}

export function teamsCheckPermissionsForProjectLegacy(http: HttpClient, rootUrl: string, params: TeamsCheckPermissionsForProjectLegacy$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamProject>> {
  const rb = new RequestBuilder(rootUrl, teamsCheckPermissionsForProjectLegacy.PATH, 'get');
  if (params) {
    rb.path('team_id', params.team_id, {});
    rb.path('project_id', params.project_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamProject>;
    })
  );
}

teamsCheckPermissionsForProjectLegacy.PATH = '/teams/{team_id}/projects/{project_id}';
