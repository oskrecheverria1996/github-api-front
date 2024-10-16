/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Runner } from '../../models/runner';

export interface ActionsGenerateRunnerJitconfigForRepo$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;
      body: {

/**
 * The name of the new runner.
 */
'name': string;

/**
 * The ID of the runner group to register the runner to.
 */
'runner_group_id': number;

/**
 * The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100.
 */
'labels': Array<string>;

/**
 * The working directory to be used for job execution, relative to the runner install directory.
 */
'work_folder'?: string;
}
}

export function actionsGenerateRunnerJitconfigForRepo(http: HttpClient, rootUrl: string, params: ActionsGenerateRunnerJitconfigForRepo$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'runner': Runner;

/**
 * The base64 encoded runner configuration.
 */
'encoded_jit_config': string;
}>> {
  const rb = new RequestBuilder(rootUrl, actionsGenerateRunnerJitconfigForRepo.PATH, 'post');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'runner': Runner;
      
      /**
       * The base64 encoded runner configuration.
       */
      'encoded_jit_config': string;
      }>;
    })
  );
}

actionsGenerateRunnerJitconfigForRepo.PATH = '/repos/{owner}/{repo}/actions/runners/generate-jitconfig';
