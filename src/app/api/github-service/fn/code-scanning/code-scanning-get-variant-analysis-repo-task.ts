/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeScanningVariantAnalysisRepoTask } from '../../models/code-scanning-variant-analysis-repo-task';

export interface CodeScanningGetVariantAnalysisRepoTask$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the controller repository.
 */
  repo: string;

/**
 * The ID of the variant analysis.
 */
  codeql_variant_analysis_id: number;

/**
 * The account owner of the variant analysis repository. The name is not case sensitive.
 */
  repo_owner: string;

/**
 * The name of the variant analysis repository.
 */
  repo_name: string;
}

export function codeScanningGetVariantAnalysisRepoTask(http: HttpClient, rootUrl: string, params: CodeScanningGetVariantAnalysisRepoTask$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeScanningVariantAnalysisRepoTask>> {
  const rb = new RequestBuilder(rootUrl, codeScanningGetVariantAnalysisRepoTask.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('codeql_variant_analysis_id', params.codeql_variant_analysis_id, {});
    rb.path('repo_owner', params.repo_owner, {});
    rb.path('repo_name', params.repo_name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodeScanningVariantAnalysisRepoTask>;
    })
  );
}

codeScanningGetVariantAnalysisRepoTask.PATH = '/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}';
