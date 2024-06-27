/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ReposListAttestations$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

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
 * The parameter should be set to the attestation's subject's SHA256 digest, in the form `sha256:HEX_DIGEST`.
 */
  subject_digest: string;
}

export function reposListAttestations(http: HttpClient, rootUrl: string, params: ReposListAttestations$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'attestations'?: Array<{

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle'?: {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
'repository_id'?: number;
}>;
}>> {
  const rb = new RequestBuilder(rootUrl, reposListAttestations.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.query('per_page', params.per_page, {});
    rb.query('before', params.before, {});
    rb.query('after', params.after, {});
    rb.path('subject_digest', params.subject_digest, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'attestations'?: Array<{
      
      /**
       * The attestation's Sigstore Bundle.
       * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
       */
      'bundle'?: {
      'mediaType'?: string;
      'verificationMaterial'?: {
      [key: string]: any;
      };
      'dsseEnvelope'?: {
      [key: string]: any;
      };
      };
      'repository_id'?: number;
      }>;
      }>;
    })
  );
}

reposListAttestations.PATH = '/repos/{owner}/{repo}/attestations/{subject_digest}';
