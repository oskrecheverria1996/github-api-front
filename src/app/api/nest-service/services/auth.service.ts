/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerCreate } from '../fn/auth/auth-controller-create';
import { AuthControllerCreate$Params } from '../fn/auth/auth-controller-create';
import { authControllerFindAll } from '../fn/auth/auth-controller-find-all';
import { AuthControllerFindAll$Params } from '../fn/auth/auth-controller-find-all';
import { authControllerFindOne } from '../fn/auth/auth-controller-find-one';
import { AuthControllerFindOne$Params } from '../fn/auth/auth-controller-find-one';
import { authControllerLogin } from '../fn/auth/auth-controller-login';
import { AuthControllerLogin$Params } from '../fn/auth/auth-controller-login';
import { authControllerRemove } from '../fn/auth/auth-controller-remove';
import { AuthControllerRemove$Params } from '../fn/auth/auth-controller-remove';
import { authControllerUpdate } from '../fn/auth/auth-controller-update';
import { AuthControllerUpdate$Params } from '../fn/auth/auth-controller-update';
import { authControllerValidateEmail } from '../fn/auth/auth-controller-validate-email';
import { AuthControllerValidateEmail$Params } from '../fn/auth/auth-controller-validate-email';
import { LoginResponseDto } from '../models/login-response-dto';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerCreate()` */
  static readonly AuthControllerCreatePath = '/api/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerCreate$Response(params: AuthControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseDto>> {
    return authControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerCreate(params: AuthControllerCreate$Params, context?: HttpContext): Observable<LoginResponseDto> {
    return this.authControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponseDto>): LoginResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerLogin()` */
  static readonly AuthControllerLoginPath = '/api/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerLogin$Response(params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseDto>> {
    return authControllerLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerLogin(params: AuthControllerLogin$Params, context?: HttpContext): Observable<LoginResponseDto> {
    return this.authControllerLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponseDto>): LoginResponseDto => r.body)
    );
  }

  /** Path part for operation `authControllerFindAll()` */
  static readonly AuthControllerFindAllPath = '/api/auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerFindAll$Response(params?: AuthControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerFindAll(params?: AuthControllerFindAll$Params, context?: HttpContext): Observable<void> {
    return this.authControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerFindOne()` */
  static readonly AuthControllerFindOnePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerFindOne$Response(params: AuthControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerFindOne(params: AuthControllerFindOne$Params, context?: HttpContext): Observable<void> {
    return this.authControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerRemove()` */
  static readonly AuthControllerRemovePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRemove$Response(params: AuthControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRemove(params: AuthControllerRemove$Params, context?: HttpContext): Observable<void> {
    return this.authControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerUpdate()` */
  static readonly AuthControllerUpdatePath = '/api/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerUpdate$Response(params: AuthControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return authControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerUpdate(params: AuthControllerUpdate$Params, context?: HttpContext): Observable<User> {
    return this.authControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `authControllerValidateEmail()` */
  static readonly AuthControllerValidateEmailPath = '/api/auth/validate-email/{token}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerValidateEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerValidateEmail$Response(params: AuthControllerValidateEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerValidateEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerValidateEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerValidateEmail(params: AuthControllerValidateEmail$Params, context?: HttpContext): Observable<void> {
    return this.authControllerValidateEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
