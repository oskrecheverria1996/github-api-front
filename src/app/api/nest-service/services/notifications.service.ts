/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { NotificationEntity } from '../models/notification-entity';
import { notificationsControllerAllNotifications } from '../fn/notifications/notifications-controller-all-notifications';
import { NotificationsControllerAllNotifications$Params } from '../fn/notifications/notifications-controller-all-notifications';
import { notificationsControllerGetNotReadNotifications } from '../fn/notifications/notifications-controller-get-not-read-notifications';
import { NotificationsControllerGetNotReadNotifications$Params } from '../fn/notifications/notifications-controller-get-not-read-notifications';
import { notificationsControllerUpdateNotifications } from '../fn/notifications/notifications-controller-update-notifications';
import { NotificationsControllerUpdateNotifications$Params } from '../fn/notifications/notifications-controller-update-notifications';
import { PaginatedResponseDto } from '../models/paginated-response-dto';

@Injectable({ providedIn: 'root' })
export class NotificationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `notificationsControllerAllNotifications()` */
  static readonly NotificationsControllerAllNotificationsPath = '/api/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsControllerAllNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerAllNotifications$Response(params: NotificationsControllerAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResponseDto>> {
    return notificationsControllerAllNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsControllerAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerAllNotifications(params: NotificationsControllerAllNotifications$Params, context?: HttpContext): Observable<PaginatedResponseDto> {
    return this.notificationsControllerAllNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResponseDto>): PaginatedResponseDto => r.body)
    );
  }

  /** Path part for operation `notificationsControllerUpdateNotifications()` */
  static readonly NotificationsControllerUpdateNotificationsPath = '/api/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsControllerUpdateNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerUpdateNotifications$Response(params?: NotificationsControllerUpdateNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return notificationsControllerUpdateNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsControllerUpdateNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerUpdateNotifications(params?: NotificationsControllerUpdateNotifications$Params, context?: HttpContext): Observable<{
}> {
    return this.notificationsControllerUpdateNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `notificationsControllerGetNotReadNotifications()` */
  static readonly NotificationsControllerGetNotReadNotificationsPath = '/api/notifications/notReadNotifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsControllerGetNotReadNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerGetNotReadNotifications$Response(params?: NotificationsControllerGetNotReadNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NotificationEntity>>> {
    return notificationsControllerGetNotReadNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsControllerGetNotReadNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsControllerGetNotReadNotifications(params?: NotificationsControllerGetNotReadNotifications$Params, context?: HttpContext): Observable<Array<NotificationEntity>> {
    return this.notificationsControllerGetNotReadNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NotificationEntity>>): Array<NotificationEntity> => r.body)
    );
  }

}
