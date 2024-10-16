/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginResponseDto } from '../../models/login-response-dto';
import { LoginUserDto } from '../../models/login-user-dto';

export interface AuthControllerLogin$Params {
      body: LoginUserDto
}

export function authControllerLogin(http: HttpClient, rootUrl: string, params: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginResponseDto>> {
  const rb = new RequestBuilder(rootUrl, authControllerLogin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoginResponseDto>;
    })
  );
}

authControllerLogin.PATH = '/api/auth/login';
