/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MarkdownRenderRaw$XMarkdown$Params {
      body?: string
}

export function markdownRenderRaw$XMarkdown(http: HttpClient, rootUrl: string, params?: MarkdownRenderRaw$XMarkdown$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, markdownRenderRaw$XMarkdown.PATH, 'post');
  if (params) {
    rb.body(params.body, 'text/x-markdown');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/html', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

markdownRenderRaw$XMarkdown.PATH = '/markdown/raw';
