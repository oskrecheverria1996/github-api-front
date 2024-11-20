/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationEntity } from '../../models/notification-entity';

export interface NotificationsControllerGetNotReadNotifications$Params {
}

export function notificationsControllerGetNotReadNotifications(http: HttpClient, rootUrl: string, params?: NotificationsControllerGetNotReadNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NotificationEntity>>> {
  const rb = new RequestBuilder(rootUrl, notificationsControllerGetNotReadNotifications.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NotificationEntity>>;
    })
  );
}

notificationsControllerGetNotReadNotifications.PATH = '/api/notifications/notReadNotifications';
