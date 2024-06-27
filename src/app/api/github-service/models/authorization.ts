/* tslint:disable */
/* eslint-disable */
import { NullableScopedInstallation } from '../models/nullable-scoped-installation';
import { NullableSimpleUser } from '../models/nullable-simple-user';

/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 */
export interface Authorization {
  app: {
'client_id': string;
'name': string;
'url': string;
};
  created_at: string;
  expires_at: string | null;
  fingerprint: string | null;
  hashed_token: string | null;
  id: number;
  installation?: NullableScopedInstallation | null;
  note: string | null;
  note_url: string | null;

  /**
   * A list of scopes that this authorization is in.
   */
  scopes: Array<string> | null;
  token: string;
  token_last_eight: string | null;
  updated_at: string;
  url: string;
  user?: NullableSimpleUser | null;
}
