/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PagesDeploymentStatus } from '../../models/pages-deployment-status';

export interface ReposGetPagesDeployment$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The ID of the Pages deployment. You can also give the commit SHA of the deployment.
 */
  pages_deployment_id: (number | string);
}

export function reposGetPagesDeployment(http: HttpClient, rootUrl: string, params: ReposGetPagesDeployment$Params, context?: HttpContext): Observable<StrictHttpResponse<PagesDeploymentStatus>> {
  const rb = new RequestBuilder(rootUrl, reposGetPagesDeployment.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('pages_deployment_id', params.pages_deployment_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PagesDeploymentStatus>;
    })
  );
}

reposGetPagesDeployment.PATH = '/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}';
