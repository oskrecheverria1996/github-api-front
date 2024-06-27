/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodespacesPermissionsCheckForDevcontainer } from '../../models/codespaces-permissions-check-for-devcontainer';

export interface CodespacesCheckPermissionsForDevcontainer$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The git reference that points to the location of the devcontainer configuration to use for the permission check. The value of `ref` will typically be a branch name (`heads/BRANCH_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
 */
  ref: string;

/**
 * Path to the devcontainer.json configuration to use for the permission check.
 */
  devcontainer_path: string;
}

export function codespacesCheckPermissionsForDevcontainer(http: HttpClient, rootUrl: string, params: CodespacesCheckPermissionsForDevcontainer$Params, context?: HttpContext): Observable<StrictHttpResponse<CodespacesPermissionsCheckForDevcontainer>> {
  const rb = new RequestBuilder(rootUrl, codespacesCheckPermissionsForDevcontainer.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.query('ref', params.ref, {});
    rb.query('devcontainer_path', params.devcontainer_path, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodespacesPermissionsCheckForDevcontainer>;
    })
  );
}

codespacesCheckPermissionsForDevcontainer.PATH = '/repos/{owner}/{repo}/codespaces/permissions_check';
