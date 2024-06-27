/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityConfiguration } from '../../models/code-security-configuration';

export interface CodeSecurityGetConfigurationsForOrg$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The target type of the code security configuration
 */
  target_type?: 'global' | 'all';

/**
 * 'The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."'
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
}

export function codeSecurityGetConfigurationsForOrg(http: HttpClient, rootUrl: string, params: CodeSecurityGetConfigurationsForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CodeSecurityConfiguration>>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityGetConfigurationsForOrg.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.query('target_type', params.target_type, {});
    rb.query('per_page', params.per_page, {});
    rb.query('before', params.before, {});
    rb.query('after', params.after, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CodeSecurityConfiguration>>;
    })
  );
}

codeSecurityGetConfigurationsForOrg.PATH = '/orgs/{org}/code-security/configurations';
