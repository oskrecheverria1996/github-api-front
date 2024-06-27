/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ActionsUpdateEnvironmentVariable$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The name of the variable.
 */
  name: string;

/**
 * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
 */
  environment_name: string;
      body: {

/**
 * The name of the variable.
 */
'name'?: string;

/**
 * The value of the variable.
 */
'value'?: string;
}
}

export function actionsUpdateEnvironmentVariable(http: HttpClient, rootUrl: string, params: ActionsUpdateEnvironmentVariable$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, actionsUpdateEnvironmentVariable.PATH, 'patch');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('name', params.name, {});
    rb.path('environment_name', params.environment_name, {});
    rb.body(params.body, 'application/json');
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

actionsUpdateEnvironmentVariable.PATH = '/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}';
