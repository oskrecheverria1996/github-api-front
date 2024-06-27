/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Installation } from '../../models/installation';

export interface AppsGetUserInstallation$Params {

/**
 * The handle for the GitHub user account.
 */
  username: string;
}

export function appsGetUserInstallation(http: HttpClient, rootUrl: string, params: AppsGetUserInstallation$Params, context?: HttpContext): Observable<StrictHttpResponse<Installation>> {
  const rb = new RequestBuilder(rootUrl, appsGetUserInstallation.PATH, 'get');
  if (params) {
    rb.path('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Installation>;
    })
  );
}

appsGetUserInstallation.PATH = '/users/{username}/installation';
