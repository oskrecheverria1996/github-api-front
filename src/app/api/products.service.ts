import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProductsList():Observable<any> {
    return this.http.get(`http://localhost:3000/api/products`,
      {
        observe: 'response',
        reportProgress: true,
      })
      .pipe(map(res => res.body))
  }
}
