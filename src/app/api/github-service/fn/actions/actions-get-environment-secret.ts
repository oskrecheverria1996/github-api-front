/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActionsSecret } from '../../models/actions-secret';

export interface ActionsGetEnvironmentSecret$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
 */
  environment_name: string;

/**
 * The name of the secret.
 */
  secret_name: string;
}

export function actionsGetEnvironmentSecret(http: HttpClient, rootUrl: string, params: ActionsGetEnvironmentSecret$Params, context?: HttpContext): Observable<StrictHttpResponse<ActionsSecret>> {
  const rb = new RequestBuilder(rootUrl, actionsGetEnvironmentSecret.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('environment_name', params.environment_name, {});
    rb.path('secret_name', params.secret_name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ActionsSecret>;
    })
  );
}

actionsGetEnvironmentSecret.PATH = '/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}';
