/* tslint:disable */
/* eslint-disable */
import { NullableLicenseSimple } from '../models/nullable-license-simple';

/**
 * License Content
 */
export interface LicenseContent {
  '_links': {
'git': string | null;
'html': string | null;
'self': string;
};
  content: string;
  download_url: string | null;
  encoding: string;
  git_url: string | null;
  html_url: string | null;
  license: NullableLicenseSimple | null;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
}
