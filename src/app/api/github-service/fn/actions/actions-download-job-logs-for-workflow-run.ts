/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ActionsDownloadJobLogsForWorkflowRun$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the job.
 */
  job_id: number;
}

export function actionsDownloadJobLogsForWorkflowRun(http: HttpClient, rootUrl: string, params: ActionsDownloadJobLogsForWorkflowRun$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, actionsDownloadJobLogsForWorkflowRun.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('job_id', params.job_id, {});
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

actionsDownloadJobLogsForWorkflowRun.PATH = '/repos/{owner}/{repo}/actions/jobs/{job_id}/logs';
