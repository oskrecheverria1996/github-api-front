/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PullRequestReviewComment } from '../../models/pull-request-review-comment';

export interface PullsListReviewComments$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The number that identifies the pull request.
 */
  pull_number: number;

/**
 * The property to sort the results by.
 */
  sort?: 'created' | 'updated';

/**
 * The direction to sort results. Ignored without `sort` parameter.
 */
  direction?: 'asc' | 'desc';

/**
 * Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
  since?: string;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function pullsListReviewComments(http: HttpClient, rootUrl: string, params: PullsListReviewComments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PullRequestReviewComment>>> {
  const rb = new RequestBuilder(rootUrl, pullsListReviewComments.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('pull_number', params.pull_number, {});
    rb.query('sort', params.sort, {});
    rb.query('direction', params.direction, {});
    rb.query('since', params.since, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PullRequestReviewComment>>;
    })
  );
}

pullsListReviewComments.PATH = '/repos/{owner}/{repo}/pulls/{pull_number}/comments';
