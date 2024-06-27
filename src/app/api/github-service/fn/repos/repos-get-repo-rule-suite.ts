/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RuleSuite } from '../../models/rule-suite';

export interface ReposGetRepoRuleSuite$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the rule suite result.
 * To get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)
 * for repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)
 * for organizations.
 */
  rule_suite_id: number;
}

export function reposGetRepoRuleSuite(http: HttpClient, rootUrl: string, params: ReposGetRepoRuleSuite$Params, context?: HttpContext): Observable<StrictHttpResponse<RuleSuite>> {
  const rb = new RequestBuilder(rootUrl, reposGetRepoRuleSuite.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('rule_suite_id', params.rule_suite_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RuleSuite>;
    })
  );
}

reposGetRepoRuleSuite.PATH = '/repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}';
