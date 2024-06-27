/* tslint:disable */
/* eslint-disable */
import { SearchResultTextMatches } from '../models/search-result-text-matches';

/**
 * User Search Result Item
 */
export interface UserSearchResultItem {
  avatar_url: string;
  bio?: string | null;
  blog?: string | null;
  company?: string | null;
  created_at?: string;
  email?: string | null;
  events_url: string;
  followers?: number;
  followers_url: string;
  following?: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  hireable?: boolean | null;
  html_url: string;
  id: number;
  location?: string | null;
  login: string;
  name?: string | null;
  node_id: string;
  organizations_url: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  suspended_at?: string | null;
  text_matches?: SearchResultTextMatches;
  type: string;
  updated_at?: string;
  url: string;
}
