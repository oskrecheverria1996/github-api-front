/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RuleSuites } from '../../models/rule-suites';

export interface ReposGetRepoRuleSuites$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The name of the ref. Cannot contain wildcard characters. When specified, only rule evaluations triggered for this ref will be returned.
 */
  ref?: string;

/**
 * The time period to filter by.
 *
 * For example, `day` will filter for rule suites that occurred in the past 24 hours, and `week` will filter for insights that occurred in the past 7 days (168 hours).
 */
  time_period?: 'hour' | 'day' | 'week' | 'month';

/**
 * The handle for the GitHub user account to filter on. When specified, only rule evaluations triggered by this actor will be returned.
 */
  actor_name?: string;

/**
 * The rule results to filter on. When specified, only suites with this result will be returned.
 */
  rule_suite_result?: 'pass' | 'fail' | 'bypass' | 'all';

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function reposGetRepoRuleSuites(http: HttpClient, rootUrl: string, params: ReposGetRepoRuleSuites$Params, context?: HttpContext): Observable<StrictHttpResponse<RuleSuites>> {
  const rb = new RequestBuilder(rootUrl, reposGetRepoRuleSuites.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.query('ref', params.ref, {});
    rb.query('time_period', params.time_period, {});
    rb.query('actor_name', params.actor_name, {});
    rb.query('rule_suite_result', params.rule_suite_result, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RuleSuites>;
    })
  );
}

reposGetRepoRuleSuites.PATH = '/repos/{owner}/{repo}/rulesets/rule-suites';
