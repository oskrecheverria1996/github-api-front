/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CopilotSeatDetails } from '../../models/copilot-seat-details';

export interface CopilotListCopilotSeatsForEnterprise$Params {

/**
 * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
 */
  enterprise: string;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;
}

export function copilotListCopilotSeatsForEnterprise(http: HttpClient, rootUrl: string, params: CopilotListCopilotSeatsForEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}>> {
  const rb = new RequestBuilder(rootUrl, copilotListCopilotSeatsForEnterprise.PATH, 'get');
  if (params) {
    rb.path('enterprise', params.enterprise, {});
    rb.query('page', params.page, {});
    rb.query('per_page', params.per_page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      
      /**
       * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
       */
      'total_seats'?: number;
      'seats'?: Array<CopilotSeatDetails>;
      }>;
    })
  );
}

copilotListCopilotSeatsForEnterprise.PATH = '/enterprises/{enterprise}/copilot/billing/seats';
