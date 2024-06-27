/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityConfigurationRepositories } from '../../models/code-security-configuration-repositories';

export interface CodeSecurityGetRepositoriesForConfiguration$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The unique identifier of the code security configuration.
 */
  configuration_id: number;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  before?: string;

/**
 * A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  after?: string;

/**
 * A comma-separated list of statuses. If specified, only repositories with these attachment statuses will be returned.
 *
 * Can be: `all`, `attached`, `attaching`, `detached`, `enforced`, `failed`, `updating`
 */
  status?: string;
}

export function codeSecurityGetRepositoriesForConfiguration(http: HttpClient, rootUrl: string, params: CodeSecurityGetRepositoriesForConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CodeSecurityConfigurationRepositories>>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityGetRepositoriesForConfiguration.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('configuration_id', params.configuration_id, {});
    rb.query('per_page', params.per_page, {});
    rb.query('before', params.before, {});
    rb.query('after', params.after, {});
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CodeSecurityConfigurationRepositories>>;
    })
  );
}

codeSecurityGetRepositoriesForConfiguration.PATH = '/orgs/{org}/code-security/configurations/{configuration_id}/repositories';
