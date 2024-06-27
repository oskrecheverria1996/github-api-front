/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationFineGrainedPermission } from '../../models/organization-fine-grained-permission';

export interface OrgsListOrganizationFineGrainedPermissions$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
}

export function orgsListOrganizationFineGrainedPermissions(http: HttpClient, rootUrl: string, params: OrgsListOrganizationFineGrainedPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationFineGrainedPermission>>> {
  const rb = new RequestBuilder(rootUrl, orgsListOrganizationFineGrainedPermissions.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OrganizationFineGrainedPermission>>;
    })
  );
}

orgsListOrganizationFineGrainedPermissions.PATH = '/orgs/{org}/organization-fine-grained-permissions';
