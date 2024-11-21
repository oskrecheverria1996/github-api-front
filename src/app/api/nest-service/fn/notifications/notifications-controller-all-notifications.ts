/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResponseDto } from '../../models/paginated-response-dto';

export interface NotificationsControllerAllNotifications$Params {
  limit: number;
  page: number;
  search?: string;
}

export function notificationsControllerAllNotifications(http: HttpClient, rootUrl: string, params: NotificationsControllerAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResponseDto>> {
  const rb = new RequestBuilder(rootUrl, notificationsControllerAllNotifications.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('page', params.page, {});
    rb.query('search', params.search, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedResponseDto>;
    })
  );
}

notificationsControllerAllNotifications.PATH = '/api/notifications';
