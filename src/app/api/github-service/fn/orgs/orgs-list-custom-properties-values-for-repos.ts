/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrgRepoCustomPropertyValues } from '../../models/org-repo-custom-property-values';

export interface OrgsListCustomPropertiesValuesForRepos$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;

/**
 * Finds repositories in the organization with a query containing one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
 */
  repository_query?: string;
}

export function orgsListCustomPropertiesValuesForRepos(http: HttpClient, rootUrl: string, params: OrgsListCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgRepoCustomPropertyValues>>> {
  const rb = new RequestBuilder(rootUrl, orgsListCustomPropertiesValuesForRepos.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
    rb.query('repository_query', params.repository_query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OrgRepoCustomPropertyValues>>;
    })
  );
}

orgsListCustomPropertiesValuesForRepos.PATH = '/orgs/{org}/properties/values';
