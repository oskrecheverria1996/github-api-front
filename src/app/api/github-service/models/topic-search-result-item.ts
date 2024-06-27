/* tslint:disable */
/* eslint-disable */
import { SearchResultTextMatches } from '../models/search-result-text-matches';

/**
 * Topic Search Result Item
 */
export interface TopicSearchResultItem {
  aliases?: (Array<{
'topic_relation'?: {
'id'?: number;
'name'?: string;
'topic_id'?: number;
'relation_type'?: string;
};
}>) | null;
  created_at: string;
  created_by: string | null;
  curated: boolean;
  description: string | null;
  display_name: string | null;
  featured: boolean;
  logo_url?: string | null;
  name: string;
  related?: (Array<{
'topic_relation'?: {
'id'?: number;
'name'?: string;
'topic_id'?: number;
'relation_type'?: string;
};
}>) | null;
  released: string | null;
  repository_count?: number | null;
  score: number;
  short_description: string | null;
  text_matches?: SearchResultTextMatches;
  updated_at: string;
}
