/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RuleSuite } from '../../models/rule-suite';

export interface ReposGetOrgRuleSuite$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the rule suite result.
 * To get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)
 * for repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)
 * for organizations.
 */
  rule_suite_id: number;
}

export function reposGetOrgRuleSuite(http: HttpClient, rootUrl: string, params: ReposGetOrgRuleSuite$Params, context?: HttpContext): Observable<StrictHttpResponse<RuleSuite>> {
  const rb = new RequestBuilder(rootUrl, reposGetOrgRuleSuite.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
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

reposGetOrgRuleSuite.PATH = '/orgs/{org}/rulesets/rule-suites/{rule_suite_id}';
