import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProductsList(filters):Observable<any> {
    return this.http.get(`http://localhost:3000/api/products?page=${filters.page}&limit=${filters.limit}`,
      {
        observe: 'response',
        reportProgress: true,
      })
      .pipe(map(res => res.body))
  }
}
