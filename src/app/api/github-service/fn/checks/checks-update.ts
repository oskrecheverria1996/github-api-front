/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CheckRun } from '../../models/check-run';

export interface ChecksUpdate$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the check run.
 */
  check_run_id: number;
      body: ({
'status'?: 'completed';
[key: string]: any;
} | {
'status'?: 'queued' | 'in_progress';
[key: string]: any;
})
}

export function checksUpdate(http: HttpClient, rootUrl: string, params: ChecksUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<CheckRun>> {
  const rb = new RequestBuilder(rootUrl, checksUpdate.PATH, 'patch');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('check_run_id', params.check_run_id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CheckRun>;
    })
  );
}

checksUpdate.PATH = '/repos/{owner}/{repo}/check-runs/{check_run_id}';
