/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrgCustomProperty } from '../../models/org-custom-property';

export interface OrgsCreateOrUpdateCustomProperty$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The custom property name. The name is case sensitive.
 */
  custom_property_name: string;
      body: {

/**
 * The type of the value for the property
 */
'value_type': 'string' | 'single_select' | 'multi_select' | 'true_false';

/**
 * Whether the property is required.
 */
'required'?: boolean;

/**
 * Default value of the property
 */
'default_value'?: ((string | Array<string>)) | null;

/**
 * Short description of the property
 */
'description'?: string | null;

/**
 * An ordered list of the allowed values of the property.
 * The property can have up to 200 allowed values.
 */
'allowed_values'?: Array<string> | null;
}
}

export function orgsCreateOrUpdateCustomProperty(http: HttpClient, rootUrl: string, params: OrgsCreateOrUpdateCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgCustomProperty>> {
  const rb = new RequestBuilder(rootUrl, orgsCreateOrUpdateCustomProperty.PATH, 'put');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('custom_property_name', params.custom_property_name, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrgCustomProperty>;
    })
  );
}

orgsCreateOrUpdateCustomProperty.PATH = '/orgs/{org}/properties/schema/{custom_property_name}';
