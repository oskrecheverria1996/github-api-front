/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { categoriesControllerCreate } from '../fn/categories/categories-controller-create';
import { CategoriesControllerCreate$Params } from '../fn/categories/categories-controller-create';
import { categoriesControllerFindAll } from '../fn/categories/categories-controller-find-all';
import { CategoriesControllerFindAll$Params } from '../fn/categories/categories-controller-find-all';
import { categoriesControllerFindOne } from '../fn/categories/categories-controller-find-one';
import { CategoriesControllerFindOne$Params } from '../fn/categories/categories-controller-find-one';
import { categoriesControllerRemove } from '../fn/categories/categories-controller-remove';
import { CategoriesControllerRemove$Params } from '../fn/categories/categories-controller-remove';
import { categoriesControllerUpdate } from '../fn/categories/categories-controller-update';
import { CategoriesControllerUpdate$Params } from '../fn/categories/categories-controller-update';
import { Category } from '../models/category';
import { PaginatedResponseDto } from '../models/paginated-response-dto';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `categoriesControllerFindAll()` */
  static readonly CategoriesControllerFindAllPath = '/api/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFindAll$Response(params: CategoriesControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResponseDto>> {
    return categoriesControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFindAll(params: CategoriesControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResponseDto> {
    return this.categoriesControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResponseDto>): PaginatedResponseDto => r.body)
    );
  }

  /** Path part for operation `categoriesControllerCreate()` */
  static readonly CategoriesControllerCreatePath = '/api/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoriesControllerCreate$Response(params: CategoriesControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return categoriesControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoriesControllerCreate(params: CategoriesControllerCreate$Params, context?: HttpContext): Observable<Category> {
    return this.categoriesControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /** Path part for operation `categoriesControllerFindOne()` */
  static readonly CategoriesControllerFindOnePath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFindOne$Response(params: CategoriesControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return categoriesControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerFindOne(params: CategoriesControllerFindOne$Params, context?: HttpContext): Observable<Category> {
    return this.categoriesControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /** Path part for operation `categoriesControllerRemove()` */
  static readonly CategoriesControllerRemovePath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerRemove$Response(params: CategoriesControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return categoriesControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriesControllerRemove(params: CategoriesControllerRemove$Params, context?: HttpContext): Observable<{
}> {
    return this.categoriesControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `categoriesControllerUpdate()` */
  static readonly CategoriesControllerUpdatePath = '/api/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriesControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoriesControllerUpdate$Response(params: CategoriesControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return categoriesControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoriesControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoriesControllerUpdate(params: CategoriesControllerUpdate$Params, context?: HttpContext): Observable<{
}> {
    return this.categoriesControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
