/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CopilotOrganizationDetails } from '../models/copilot-organization-details';
import { CopilotSeatDetails } from '../models/copilot-seat-details';
import { CopilotUsageMetrics } from '../models/copilot-usage-metrics';
import { copilotAddCopilotSeatsForTeams } from '../fn/copilot/copilot-add-copilot-seats-for-teams';
import { CopilotAddCopilotSeatsForTeams$Params } from '../fn/copilot/copilot-add-copilot-seats-for-teams';
import { copilotAddCopilotSeatsForUsers } from '../fn/copilot/copilot-add-copilot-seats-for-users';
import { CopilotAddCopilotSeatsForUsers$Params } from '../fn/copilot/copilot-add-copilot-seats-for-users';
import { copilotCancelCopilotSeatAssignmentForTeams } from '../fn/copilot/copilot-cancel-copilot-seat-assignment-for-teams';
import { CopilotCancelCopilotSeatAssignmentForTeams$Params } from '../fn/copilot/copilot-cancel-copilot-seat-assignment-for-teams';
import { copilotCancelCopilotSeatAssignmentForUsers } from '../fn/copilot/copilot-cancel-copilot-seat-assignment-for-users';
import { CopilotCancelCopilotSeatAssignmentForUsers$Params } from '../fn/copilot/copilot-cancel-copilot-seat-assignment-for-users';
import { copilotGetCopilotOrganizationDetails } from '../fn/copilot/copilot-get-copilot-organization-details';
import { CopilotGetCopilotOrganizationDetails$Params } from '../fn/copilot/copilot-get-copilot-organization-details';
import { copilotGetCopilotSeatDetailsForUser } from '../fn/copilot/copilot-get-copilot-seat-details-for-user';
import { CopilotGetCopilotSeatDetailsForUser$Params } from '../fn/copilot/copilot-get-copilot-seat-details-for-user';
import { copilotListCopilotSeats } from '../fn/copilot/copilot-list-copilot-seats';
import { CopilotListCopilotSeats$Params } from '../fn/copilot/copilot-list-copilot-seats';
import { copilotListCopilotSeatsForEnterprise } from '../fn/copilot/copilot-list-copilot-seats-for-enterprise';
import { CopilotListCopilotSeatsForEnterprise$Params } from '../fn/copilot/copilot-list-copilot-seats-for-enterprise';
import { copilotUsageMetricsForEnterprise } from '../fn/copilot/copilot-usage-metrics-for-enterprise';
import { CopilotUsageMetricsForEnterprise$Params } from '../fn/copilot/copilot-usage-metrics-for-enterprise';
import { copilotUsageMetricsForOrg } from '../fn/copilot/copilot-usage-metrics-for-org';
import { CopilotUsageMetricsForOrg$Params } from '../fn/copilot/copilot-usage-metrics-for-org';


/**
 * Endpoints to manage Copilot using the REST API.
 */
@Injectable({ providedIn: 'root' })
export class CopilotService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `copilotListCopilotSeatsForEnterprise()` */
  static readonly CopilotListCopilotSeatsForEnterprisePath = '/enterprises/{enterprise}/copilot/billing/seats';

  /**
   * List all Copilot seat assignments for an enterprise.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Lists all active Copilot seats across organizations or enterprise teams for an enterprise with a Copilot Business or Copilot Enterprise subscription.
   *
   * Users with access through multiple organizations or enterprise teams will only be counted toward `total_seats` once.
   *
   * For each organization or enterprise team which grants Copilot access to a user, a seat detail object will appear in the `seats` array.
   *
   * Only enterprise owners and billing managers can view assigned Copilot seats across their child organizations or enterprise teams.
   *
   * Personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotListCopilotSeatsForEnterprise()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotListCopilotSeatsForEnterprise$Response(params: CopilotListCopilotSeatsForEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}>> {
    return copilotListCopilotSeatsForEnterprise(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Copilot seat assignments for an enterprise.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Lists all active Copilot seats across organizations or enterprise teams for an enterprise with a Copilot Business or Copilot Enterprise subscription.
   *
   * Users with access through multiple organizations or enterprise teams will only be counted toward `total_seats` once.
   *
   * For each organization or enterprise team which grants Copilot access to a user, a seat detail object will appear in the `seats` array.
   *
   * Only enterprise owners and billing managers can view assigned Copilot seats across their child organizations or enterprise teams.
   *
   * Personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotListCopilotSeatsForEnterprise$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotListCopilotSeatsForEnterprise(params: CopilotListCopilotSeatsForEnterprise$Params, context?: HttpContext): Observable<{

/**
 * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}> {
    return this.copilotListCopilotSeatsForEnterprise$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}>): {

/**
 * The total number of Copilot seats the enterprise is being billed for. Users with access through multiple organizations or enterprise teams are only counted once.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
} => r.body)
    );
  }

  /** Path part for operation `copilotUsageMetricsForEnterprise()` */
  static readonly CopilotUsageMetricsForEnterprisePath = '/enterprises/{enterprise}/copilot/usage';

  /**
   * Get a summary of Copilot usage for enterprise members.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * You can use this endpoint to see a daily breakdown of aggregated usage metrics for Copilot completions and Copilot Chat in the IDE
   * for all users across organizations with access to Copilot within your enterprise, with a further breakdown of suggestions, acceptances,
   * and number of active users by editor and language for each day. See the response schema tab for detailed metrics definitions.
   *
   * The response contains metrics for the prior 28 days. Usage metrics are processed once per day for the previous day,
   * and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
   * they must have telemetry enabled in their IDE.
   *
   * Only owners and billing managers can view Copilot usage metrics for the enterprise.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotUsageMetricsForEnterprise()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotUsageMetricsForEnterprise$Response(params: CopilotUsageMetricsForEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CopilotUsageMetrics>>> {
    return copilotUsageMetricsForEnterprise(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a summary of Copilot usage for enterprise members.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * You can use this endpoint to see a daily breakdown of aggregated usage metrics for Copilot completions and Copilot Chat in the IDE
   * for all users across organizations with access to Copilot within your enterprise, with a further breakdown of suggestions, acceptances,
   * and number of active users by editor and language for each day. See the response schema tab for detailed metrics definitions.
   *
   * The response contains metrics for the prior 28 days. Usage metrics are processed once per day for the previous day,
   * and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
   * they must have telemetry enabled in their IDE.
   *
   * Only owners and billing managers can view Copilot usage metrics for the enterprise.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotUsageMetricsForEnterprise$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotUsageMetricsForEnterprise(params: CopilotUsageMetricsForEnterprise$Params, context?: HttpContext): Observable<Array<CopilotUsageMetrics>> {
    return this.copilotUsageMetricsForEnterprise$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CopilotUsageMetrics>>): Array<CopilotUsageMetrics> => r.body)
    );
  }

  /** Path part for operation `copilotGetCopilotOrganizationDetails()` */
  static readonly CopilotGetCopilotOrganizationDetailsPath = '/orgs/{org}/copilot/billing';

  /**
   * Get Copilot seat information and settings for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Gets information about an organization's Copilot subscription, including seat breakdown
   * and feature policies. To configure these settings, go to your organization's settings on GitHub.com.
   * For more information, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-copilot-business-in-your-organization)".
   *
   * Only organization owners can view details about the organization's Copilot Business or Copilot Enterprise subscription.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotGetCopilotOrganizationDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotGetCopilotOrganizationDetails$Response(params: CopilotGetCopilotOrganizationDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<CopilotOrganizationDetails>> {
    return copilotGetCopilotOrganizationDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Copilot seat information and settings for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Gets information about an organization's Copilot subscription, including seat breakdown
   * and feature policies. To configure these settings, go to your organization's settings on GitHub.com.
   * For more information, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-copilot-business-in-your-organization)".
   *
   * Only organization owners can view details about the organization's Copilot Business or Copilot Enterprise subscription.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotGetCopilotOrganizationDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotGetCopilotOrganizationDetails(params: CopilotGetCopilotOrganizationDetails$Params, context?: HttpContext): Observable<CopilotOrganizationDetails> {
    return this.copilotGetCopilotOrganizationDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<CopilotOrganizationDetails>): CopilotOrganizationDetails => r.body)
    );
  }

  /** Path part for operation `copilotListCopilotSeats()` */
  static readonly CopilotListCopilotSeatsPath = '/orgs/{org}/copilot/billing/seats';

  /**
   * List all Copilot seat assignments for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Lists all active Copilot seats for an organization with a Copilot Business or Copilot Enterprise subscription.
   * Only organization owners can view assigned seats.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotListCopilotSeats()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotListCopilotSeats$Response(params: CopilotListCopilotSeats$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * Total number of Copilot seats for the organization currently being billed.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}>> {
    return copilotListCopilotSeats(this.http, this.rootUrl, params, context);
  }

  /**
   * List all Copilot seat assignments for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Lists all active Copilot seats for an organization with a Copilot Business or Copilot Enterprise subscription.
   * Only organization owners can view assigned seats.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotListCopilotSeats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotListCopilotSeats(params: CopilotListCopilotSeats$Params, context?: HttpContext): Observable<{

/**
 * Total number of Copilot seats for the organization currently being billed.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}> {
    return this.copilotListCopilotSeats$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Total number of Copilot seats for the organization currently being billed.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
}>): {

/**
 * Total number of Copilot seats for the organization currently being billed.
 */
'total_seats'?: number;
'seats'?: Array<CopilotSeatDetails>;
} => r.body)
    );
  }

  /** Path part for operation `copilotAddCopilotSeatsForTeams()` */
  static readonly CopilotAddCopilotSeatsForTeamsPath = '/orgs/{org}/copilot/billing/selected_teams';

  /**
   * Add teams to the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Purchases a GitHub Copilot seat for all users within each specified team.
   * The organization will be billed accordingly. For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * Only organization owners can add Copilot seats for their organization members.
   *
   * In order for an admin to use this endpoint, the organization must have a Copilot Business or Enterprise subscription and a configured suggestion matching policy.
   * For more information about setting up a Copilot subscription, see "[Setting up a Copilot subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)".
   * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-github-copilot-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotAddCopilotSeatsForTeams()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotAddCopilotSeatsForTeams$Response(params: CopilotAddCopilotSeatsForTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'seats_created': number;
}>> {
    return copilotAddCopilotSeatsForTeams(this.http, this.rootUrl, params, context);
  }

  /**
   * Add teams to the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Purchases a GitHub Copilot seat for all users within each specified team.
   * The organization will be billed accordingly. For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * Only organization owners can add Copilot seats for their organization members.
   *
   * In order for an admin to use this endpoint, the organization must have a Copilot Business or Enterprise subscription and a configured suggestion matching policy.
   * For more information about setting up a Copilot subscription, see "[Setting up a Copilot subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)".
   * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-github-copilot-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotAddCopilotSeatsForTeams$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotAddCopilotSeatsForTeams(params: CopilotAddCopilotSeatsForTeams$Params, context?: HttpContext): Observable<{
'seats_created': number;
}> {
    return this.copilotAddCopilotSeatsForTeams$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'seats_created': number;
}>): {
'seats_created': number;
} => r.body)
    );
  }

  /** Path part for operation `copilotCancelCopilotSeatAssignmentForTeams()` */
  static readonly CopilotCancelCopilotSeatAssignmentForTeamsPath = '/orgs/{org}/copilot/billing/selected_teams';

  /**
   * Remove teams from the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Cancels the Copilot seat assignment for all members of each team specified.
   * This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
   *
   * For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * For more information about disabling access to Copilot Business or Enterprise, see "[Revoking access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/managing-copilot/managing-access-for-copilot-in-your-organization#revoking-access-to-github-copilot-for-specific-users-in-your-organization)".
   *
   * Only organization owners can cancel Copilot seats for their organization members.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotCancelCopilotSeatAssignmentForTeams()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotCancelCopilotSeatAssignmentForTeams$Response(params: CopilotCancelCopilotSeatAssignmentForTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'seats_cancelled': number;
}>> {
    return copilotCancelCopilotSeatAssignmentForTeams(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove teams from the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Cancels the Copilot seat assignment for all members of each team specified.
   * This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
   *
   * For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * For more information about disabling access to Copilot Business or Enterprise, see "[Revoking access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/managing-copilot/managing-access-for-copilot-in-your-organization#revoking-access-to-github-copilot-for-specific-users-in-your-organization)".
   *
   * Only organization owners can cancel Copilot seats for their organization members.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotCancelCopilotSeatAssignmentForTeams$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotCancelCopilotSeatAssignmentForTeams(params: CopilotCancelCopilotSeatAssignmentForTeams$Params, context?: HttpContext): Observable<{
'seats_cancelled': number;
}> {
    return this.copilotCancelCopilotSeatAssignmentForTeams$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'seats_cancelled': number;
}>): {
'seats_cancelled': number;
} => r.body)
    );
  }

  /** Path part for operation `copilotAddCopilotSeatsForUsers()` */
  static readonly CopilotAddCopilotSeatsForUsersPath = '/orgs/{org}/copilot/billing/selected_users';

  /**
   * Add users to the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Purchases a GitHub Copilot seat for each user specified.
   * The organization will be billed accordingly. For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * Only organization owners can add Copilot seats for their organization members.
   *
   * In order for an admin to use this endpoint, the organization must have a Copilot Business or Enterprise subscription and a configured suggestion matching policy.
   * For more information about setting up a Copilot subscription, see "[Setting up a Copilot subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)".
   * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-github-copilot-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotAddCopilotSeatsForUsers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotAddCopilotSeatsForUsers$Response(params: CopilotAddCopilotSeatsForUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'seats_created': number;
}>> {
    return copilotAddCopilotSeatsForUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Add users to the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Purchases a GitHub Copilot seat for each user specified.
   * The organization will be billed accordingly. For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * Only organization owners can add Copilot seats for their organization members.
   *
   * In order for an admin to use this endpoint, the organization must have a Copilot Business or Enterprise subscription and a configured suggestion matching policy.
   * For more information about setting up a Copilot subscription, see "[Setting up a Copilot subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)".
   * For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-github-copilot-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotAddCopilotSeatsForUsers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotAddCopilotSeatsForUsers(params: CopilotAddCopilotSeatsForUsers$Params, context?: HttpContext): Observable<{
'seats_created': number;
}> {
    return this.copilotAddCopilotSeatsForUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'seats_created': number;
}>): {
'seats_created': number;
} => r.body)
    );
  }

  /** Path part for operation `copilotCancelCopilotSeatAssignmentForUsers()` */
  static readonly CopilotCancelCopilotSeatAssignmentForUsersPath = '/orgs/{org}/copilot/billing/selected_users';

  /**
   * Remove users from the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Cancels the Copilot seat assignment for each user specified.
   * This will cause the specified users to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
   *
   * For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * For more information about disabling access to Copilot Business or Enterprise, see "[Revoking access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/managing-copilot/managing-access-for-copilot-in-your-organization#revoking-access-to-github-copilot-for-specific-users-in-your-organization)".
   *
   * Only organization owners can cancel Copilot seats for their organization members.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotCancelCopilotSeatAssignmentForUsers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotCancelCopilotSeatAssignmentForUsers$Response(params: CopilotCancelCopilotSeatAssignmentForUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'seats_cancelled': number;
}>> {
    return copilotCancelCopilotSeatAssignmentForUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove users from the Copilot subscription for an organization.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Cancels the Copilot seat assignment for each user specified.
   * This will cause the specified users to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.
   *
   * For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".
   *
   * For more information about disabling access to Copilot Business or Enterprise, see "[Revoking access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/managing-copilot/managing-access-for-copilot-in-your-organization#revoking-access-to-github-copilot-for-specific-users-in-your-organization)".
   *
   * Only organization owners can cancel Copilot seats for their organization members.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotCancelCopilotSeatAssignmentForUsers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  copilotCancelCopilotSeatAssignmentForUsers(params: CopilotCancelCopilotSeatAssignmentForUsers$Params, context?: HttpContext): Observable<{
'seats_cancelled': number;
}> {
    return this.copilotCancelCopilotSeatAssignmentForUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'seats_cancelled': number;
}>): {
'seats_cancelled': number;
} => r.body)
    );
  }

  /** Path part for operation `copilotUsageMetricsForOrg()` */
  static readonly CopilotUsageMetricsForOrgPath = '/orgs/{org}/copilot/usage';

  /**
   * Get a summary of Copilot usage for organization members.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * You can use this endpoint to see a daily breakdown of aggregated usage metrics for Copilot completions and Copilot Chat in the IDE
   * across an organization, with a further breakdown of suggestions, acceptances, and number of active users by editor and language for each day.
   * See the response schema tab for detailed metrics definitions.
   *
   * The response contains metrics for the prior 28 days. Usage metrics are processed once per day for the previous day,
   * and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
   * they must have telemetry enabled in their IDE.
   *
   * Organization owners, and owners and billing managers of the parent enterprise, can view Copilot usage metrics.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotUsageMetricsForOrg()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotUsageMetricsForOrg$Response(params: CopilotUsageMetricsForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CopilotUsageMetrics>>> {
    return copilotUsageMetricsForOrg(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a summary of Copilot usage for organization members.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * You can use this endpoint to see a daily breakdown of aggregated usage metrics for Copilot completions and Copilot Chat in the IDE
   * across an organization, with a further breakdown of suggestions, acceptances, and number of active users by editor and language for each day.
   * See the response schema tab for detailed metrics definitions.
   *
   * The response contains metrics for the prior 28 days. Usage metrics are processed once per day for the previous day,
   * and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
   * they must have telemetry enabled in their IDE.
   *
   * Organization owners, and owners and billing managers of the parent enterprise, can view Copilot usage metrics.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotUsageMetricsForOrg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotUsageMetricsForOrg(params: CopilotUsageMetricsForOrg$Params, context?: HttpContext): Observable<Array<CopilotUsageMetrics>> {
    return this.copilotUsageMetricsForOrg$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CopilotUsageMetrics>>): Array<CopilotUsageMetrics> => r.body)
    );
  }

  /** Path part for operation `copilotGetCopilotSeatDetailsForUser()` */
  static readonly CopilotGetCopilotSeatDetailsForUserPath = '/orgs/{org}/members/{username}/copilot';

  /**
   * Get Copilot seat assignment details for a user.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Gets the GitHub Copilot seat assignment details for a member of an organization who currently has access to GitHub Copilot.
   *
   * Only organization owners can view Copilot seat assignment details for members of their organization.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `copilotGetCopilotSeatDetailsForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotGetCopilotSeatDetailsForUser$Response(params: CopilotGetCopilotSeatDetailsForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<CopilotSeatDetails>> {
    return copilotGetCopilotSeatDetailsForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Copilot seat assignment details for a user.
   *
   * **Note**: This endpoint is in beta and is subject to change.
   *
   * Gets the GitHub Copilot seat assignment details for a member of an organization who currently has access to GitHub Copilot.
   *
   * Only organization owners can view Copilot seat assignment details for members of their organization.
   *
   * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `copilotGetCopilotSeatDetailsForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  copilotGetCopilotSeatDetailsForUser(params: CopilotGetCopilotSeatDetailsForUser$Params, context?: HttpContext): Observable<CopilotSeatDetails> {
    return this.copilotGetCopilotSeatDetailsForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<CopilotSeatDetails>): CopilotSeatDetails => r.body)
    );
  }

}
