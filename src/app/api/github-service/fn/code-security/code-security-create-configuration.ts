/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeSecurityConfiguration } from '../../models/code-security-configuration';

export interface CodeSecurityCreateConfiguration$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;
      body: {

/**
 * The name of the code security configuration. Must be unique within the organization.
 */
'name': string;

/**
 * A description of the code security configuration
 */
'description': string;

/**
 * The enablement status of GitHub Advanced Security
 */
'advanced_security'?: 'enabled' | 'disabled';

/**
 * The enablement status of Dependency Graph
 */
'dependency_graph'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of Dependabot alerts
 */
'dependabot_alerts'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of Dependabot security updates
 */
'dependabot_security_updates'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of code scanning default setup
 */
'code_scanning_default_setup'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of secret scanning
 */
'secret_scanning'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of secret scanning push protection
 */
'secret_scanning_push_protection'?: 'enabled' | 'disabled' | 'not_set';

/**
 * The enablement status of private vulnerability reporting
 */
'private_vulnerability_reporting'?: 'enabled' | 'disabled' | 'not_set';
}
}

export function codeSecurityCreateConfiguration(http: HttpClient, rootUrl: string, params: CodeSecurityCreateConfiguration$Params, context?: HttpContext): Observable<StrictHttpResponse<CodeSecurityConfiguration>> {
  const rb = new RequestBuilder(rootUrl, codeSecurityCreateConfiguration.PATH, 'post');
  if (params) {
    rb.path('org', params.org, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CodeSecurityConfiguration>;
    })
  );
}

codeSecurityCreateConfiguration.PATH = '/orgs/{org}/code-security/configurations';
