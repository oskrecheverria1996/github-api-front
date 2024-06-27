/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://api.github.com';
}

/**
 * Parameters for `AppModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
