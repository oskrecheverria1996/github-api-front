/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CopilotAddCopilotSeatsForUsers$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
      body: {

/**
 * The usernames of the organization members to be granted access to GitHub Copilot.
 */
'selected_usernames': Array<string>;
}
}

export function copilotAddCopilotSeatsForUsers(http: HttpClient, rootUrl: string, params: CopilotAddCopilotSeatsForUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'seats_created': number;
}>> {
  const rb = new RequestBuilder(rootUrl, copilotAddCopilotSeatsForUsers.PATH, 'post');
  if (params) {
    rb.path('org', params.org, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'seats_created': number;
      }>;
    })
  );
}

copilotAddCopilotSeatsForUsers.PATH = '/orgs/{org}/copilot/billing/selected_users';
