/* tslint:disable */
/* eslint-disable */

/**
 * An array of repository objects that the installation can access.
 */
export type WebhooksRepositories = Array<{
'full_name': string;

/**
 * Unique identifier of the repository
 */
'id': number;

/**
 * The name of the repository.
 */
'name': string;
'node_id': string;

/**
 * Whether the repository is private or public.
 */
'private': boolean;
}>;
