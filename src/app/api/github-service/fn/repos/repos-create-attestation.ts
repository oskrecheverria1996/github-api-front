/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ReposCreateAttestation$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;
      body: {

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle': {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
}
}

export function reposCreateAttestation(http: HttpClient, rootUrl: string, params: ReposCreateAttestation$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * The ID of the attestation.
 */
'id'?: number;
}>> {
  const rb = new RequestBuilder(rootUrl, reposCreateAttestation.PATH, 'post');
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
      return r as StrictHttpResponse<{
      
      /**
       * The ID of the attestation.
       */
      'id'?: number;
      }>;
    })
  );
}

reposCreateAttestation.PATH = '/repos/{owner}/{repo}/attestations';
