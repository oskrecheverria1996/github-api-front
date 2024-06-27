/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { GitignoreTemplate } from '../models/gitignore-template';
import { gitignoreGetAllTemplates } from '../fn/gitignore/gitignore-get-all-templates';
import { GitignoreGetAllTemplates$Params } from '../fn/gitignore/gitignore-get-all-templates';
import { gitignoreGetTemplate } from '../fn/gitignore/gitignore-get-template';
import { GitignoreGetTemplate$Params } from '../fn/gitignore/gitignore-get-template';


/**
 * View gitignore templates
 */
@Injectable({ providedIn: 'root' })
export class GitignoreService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `gitignoreGetAllTemplates()` */
  static readonly GitignoreGetAllTemplatesPath = '/gitignore/templates';

  /**
   * Get all gitignore templates.
   *
   * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `gitignoreGetAllTemplates()` instead.
   *
   * This method doesn't expect any request body.
   */
  gitignoreGetAllTemplates$Response(params?: GitignoreGetAllTemplates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return gitignoreGetAllTemplates(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all gitignore templates.
   *
   * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `gitignoreGetAllTemplates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  gitignoreGetAllTemplates(params?: GitignoreGetAllTemplates$Params, context?: HttpContext): Observable<Array<string>> {
    return this.gitignoreGetAllTemplates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `gitignoreGetTemplate()` */
  static readonly GitignoreGetTemplatePath = '/gitignore/templates/{name}';

  /**
   * Get a gitignore template.
   *
   * Get the content of a gitignore template.
   *
   * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
   *
   * - **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `gitignoreGetTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  gitignoreGetTemplate$Response(params: GitignoreGetTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<GitignoreTemplate>> {
    return gitignoreGetTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a gitignore template.
   *
   * Get the content of a gitignore template.
   *
   * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
   *
   * - **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `gitignoreGetTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  gitignoreGetTemplate(params: GitignoreGetTemplate$Params, context?: HttpContext): Observable<GitignoreTemplate> {
    return this.gitignoreGetTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<GitignoreTemplate>): GitignoreTemplate => r.body)
    );
  }

}
