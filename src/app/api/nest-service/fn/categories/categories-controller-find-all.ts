/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedResponseDto } from '../../models/paginated-response-dto';

export interface CategoriesControllerFindAll$Params {
  limit: number;
  page: number;
  search: string;
}

export function categoriesControllerFindAll(http: HttpClient, rootUrl: string, params: CategoriesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResponseDto>> {
  const rb = new RequestBuilder(rootUrl, categoriesControllerFindAll.PATH, 'get');
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

categoriesControllerFindAll.PATH = '/api/categories';
