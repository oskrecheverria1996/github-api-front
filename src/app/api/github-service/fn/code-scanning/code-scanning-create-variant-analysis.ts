/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeScanningVariantAnalysis } from '../../models/code-scanning-variant-analysis';
import { CodeScanningVariantAnalysisLanguage } from '../../models/code-scanning-variant-analysis-language';

export interface CodeScanningCreateVariantAnalysis$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;
      body: (any | any | any)
}

export function codeScanningCreateVariantAnalysis(http: HttpClient, rootUrl: string, params: CodeScanningCreateVariantAnalysis$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeScanningVariantAnalysis>> {
  const rb = new RequestBuilder(rootUrl, codeScanningCreateVariantAnalysis.PATH, 'post');
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
      return r as StrictHttpResponse<CodeScanningVariantAnalysis>;
    })
  );
}

codeScanningCreateVariantAnalysis.PATH = '/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses';
