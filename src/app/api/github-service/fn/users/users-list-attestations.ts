/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SigstoreBundle0 } from '../../models/sigstore-bundle-0';

export interface UsersListAttestations$Params {

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
 * The handle for the GitHub user account.
 */
  username: string;

/**
 * Subject Digest
 */
  subject_digest: string;
}

export function usersListAttestations(http: HttpClient, rootUrl: string, params: UsersListAttestations$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'attestations'?: Array<{
'bundle'?: SigstoreBundle0;
'repository_id'?: number;
}>;
}>> {
  const rb = new RequestBuilder(rootUrl, usersListAttestations.PATH, 'get');
  if (params) {
    rb.query('per_page', params.per_page, {});
    rb.query('before', params.before, {});
    rb.query('after', params.after, {});
    rb.path('username', params.username, {});
    rb.path('subject_digest', params.subject_digest, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'attestations'?: Array<{
      'bundle'?: SigstoreBundle0;
      'repository_id'?: number;
      }>;
      }>;
    })
  );
}

usersListAttestations.PATH = '/users/{username}/attestations/{subject_digest}';
