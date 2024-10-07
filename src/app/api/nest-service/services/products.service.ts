/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedResponseDto } from '../models/paginated-response-dto';
import { Product } from '../models/product';
import { productsControllerCreate } from '../fn/products/products-controller-create';
import { ProductsControllerCreate$Params } from '../fn/products/products-controller-create';
import { productsControllerFindAll } from '../fn/products/products-controller-find-all';
import { ProductsControllerFindAll$Params } from '../fn/products/products-controller-find-all';
import { productsControllerFindOne } from '../fn/products/products-controller-find-one';
import { ProductsControllerFindOne$Params } from '../fn/products/products-controller-find-one';
import { productsControllerRemove } from '../fn/products/products-controller-remove';
import { ProductsControllerRemove$Params } from '../fn/products/products-controller-remove';
import { productsControllerUpdate } from '../fn/products/products-controller-update';
import { ProductsControllerUpdate$Params } from '../fn/products/products-controller-update';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productsControllerFindAll()` */
  static readonly ProductsControllerFindAllPath = '/api/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerFindAll$Response(params: ProductsControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedResponseDto>> {
    return productsControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerFindAll(params: ProductsControllerFindAll$Params, context?: HttpContext): Observable<PaginatedResponseDto> {
    return this.productsControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedResponseDto>): PaginatedResponseDto => r.body)
    );
  }

  /** Path part for operation `productsControllerCreate()` */
  static readonly ProductsControllerCreatePath = '/api/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsControllerCreate$Response(params: ProductsControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productsControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsControllerCreate(params: ProductsControllerCreate$Params, context?: HttpContext): Observable<Product> {
    return this.productsControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `productsControllerFindOne()` */
  static readonly ProductsControllerFindOnePath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerFindOne$Response(params: ProductsControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productsControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerFindOne(params: ProductsControllerFindOne$Params, context?: HttpContext): Observable<Product> {
    return this.productsControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `productsControllerRemove()` */
  static readonly ProductsControllerRemovePath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerRemove$Response(params: ProductsControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return productsControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productsControllerRemove(params: ProductsControllerRemove$Params, context?: HttpContext): Observable<{
}> {
    return this.productsControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `productsControllerUpdate()` */
  static readonly ProductsControllerUpdatePath = '/api/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productsControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsControllerUpdate$Response(params: ProductsControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return productsControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productsControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productsControllerUpdate(params: ProductsControllerUpdate$Params, context?: HttpContext): Observable<{
}> {
    return this.productsControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
