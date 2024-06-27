/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CopilotUsageMetrics } from '../../models/copilot-usage-metrics';

export interface CopilotUsageMetricsForEnterprise$Params {

/**
 * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
 */
  enterprise: string;

/**
 * Show usage metrics since this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`). Maximum value is 28 days ago.
 */
  since?: string;

/**
 * Show usage metrics until this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`) and should not preceed the `since` date if it is passed.
 */
  until?: string;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;

/**
 * The number of days of metrics to display per page (max 28). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;
}

export function copilotUsageMetricsForEnterprise(http: HttpClient, rootUrl: string, params: CopilotUsageMetricsForEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CopilotUsageMetrics>>> {
  const rb = new RequestBuilder(rootUrl, copilotUsageMetricsForEnterprise.PATH, 'get');
  if (params) {
    rb.path('enterprise', params.enterprise, {});
    rb.query('since', params.since, {});
    rb.query('until', params.until, {});
    rb.query('page', params.page, {});
    rb.query('per_page', params.per_page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CopilotUsageMetrics>>;
    })
  );
}

copilotUsageMetricsForEnterprise.PATH = '/enterprises/{enterprise}/copilot/usage';
