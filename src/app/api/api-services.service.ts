import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ApiServicesService {
    
  constructor(
    private http: HttpClient,
  ) { }

  
  getTableData(): Observable<any> {
    const products = [
      {code: "1231", name: 'Product 1', category: 'category 1', quantity: '111'},
      {code: "1232", name: 'Product 2', category: 'category 1', quantity: '111'},
      {code: "1233", name: 'Product 4', category: 'category 1', quantity: '111'},
      {code: "1234", name: 'Product 5', category: 'category 1', quantity: '111'},
      {code: "1235", name: 'Product 6', category: 'category 1', quantity: '111'},
      {code: "1236", name: 'Product 7', category: 'category 1', quantity: '111'},
      {code: "1237", name: 'Product 8', category: 'category 1', quantity: '111'},
      {code: "1238", name: 'Product 9', category: 'category 1', quantity: '111'},
      {code: "1239", name: 'Product 10', category: 'category 1', quantity: '111'},
      {code: "1240", name: 'Product 11', category: 'category 1', quantity: '111'},
      {code: "1241", name: 'Product 12', category: 'category 1', quantity: '111'},
      {code: "1242", name: 'Product 13', category: 'category 1', quantity: '111'},
    ];

    return of(products).pipe(
      delay(5000)
      )
  }

    getUsersList(nombre?):Observable<any> {
      return this.http.get(`https://api.github.com/search/users?q=${nombre}`,
        {
          observe: 'response',
          reportProgress: true,
        })
    }

    getUserByName(name):Observable<any> {
      return this.http.get(`https://api.github.com/users/${name}`,
        {
          observe: 'response',
          reportProgress: true,
        })
    }

  }