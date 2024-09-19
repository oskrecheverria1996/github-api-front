/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { usersControllerCreate } from '../fn/auth/users-controller-create';
import { UsersControllerCreate$Params } from '../fn/auth/users-controller-create';
import { usersControllerFindAll } from '../fn/auth/users-controller-find-all';
import { UsersControllerFindAll$Params } from '../fn/auth/users-controller-find-all';
import { usersControllerFindOne } from '../fn/auth/users-controller-find-one';
import { UsersControllerFindOne$Params } from '../fn/auth/users-controller-find-one';
import { usersControllerLogin } from '../fn/auth/users-controller-login';
import { UsersControllerLogin$Params } from '../fn/auth/users-controller-login';
import { usersControllerRemove } from '../fn/auth/users-controller-remove';
import { UsersControllerRemove$Params } from '../fn/auth/users-controller-remove';
import { usersControllerUpdate } from '../fn/auth/users-controller-update';
import { UsersControllerUpdate$Params } from '../fn/auth/users-controller-update';

interface userEntity {
  email: string;
  emailValidated: string;
  id: string;
  name: string;
  role: []
}

interface LoginResponse {
  token: string;
  userEntity: userEntity;
}

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersControllerCreate()` */
  static readonly UsersControllerCreatePath = '/api/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerCreate$Response(params: UsersControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerCreate(params: UsersControllerCreate$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersControllerLogin()` */
  static readonly UsersControllerLoginPath = '/api/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerLogin$Response(params: UsersControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerLogin(params: UsersControllerLogin$Params, context?: HttpContext): Observable<LoginResponse> {
    return this.usersControllerLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): LoginResponse => JSON.parse(r.body))
    );
  }

  /** Path part for operation `usersControllerFindAll()` */
  static readonly UsersControllerFindAllPath = '/api/auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindAll$Response(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindAll(params?: UsersControllerFindAll$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersControllerFindOne()` */
  static readonly UsersControllerFindOnePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindOne$Response(params: UsersControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindOne(params: UsersControllerFindOne$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersControllerRemove()` */
  static readonly UsersControllerRemovePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerRemove$Response(params: UsersControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerRemove(params: UsersControllerRemove$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersControllerUpdate()` */
  static readonly UsersControllerUpdatePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerUpdate$Response(params: UsersControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerUpdate(params: UsersControllerUpdate$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
