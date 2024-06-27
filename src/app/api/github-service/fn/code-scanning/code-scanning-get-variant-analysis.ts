/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeScanningVariantAnalysis } from '../../models/code-scanning-variant-analysis';

export interface CodeScanningGetVariantAnalysis$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the variant analysis.
 */
  codeql_variant_analysis_id: number;
}

export function codeScanningGetVariantAnalysis(http: HttpClient, rootUrl: string, params: CodeScanningGetVariantAnalysis$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeScanningVariantAnalysis>> {
  const rb = new RequestBuilder(rootUrl, codeScanningGetVariantAnalysis.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('codeql_variant_analysis_id', params.codeql_variant_analysis_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodeScanningVariantAnalysis>;
    })
  );
}

codeScanningGetVariantAnalysis.PATH = '/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}';
