/* tslint:disable */
/* eslint-disable */
import { SecurityAdvisoryCreditTypes } from '../models/security-advisory-credit-types';
import { SimpleUser } from '../models/simple-user';
import { Vulnerability } from '../models/vulnerability';

/**
 * A GitHub Security Advisory.
 */
export interface GlobalAdvisory {

  /**
   * The users who contributed to the advisory.
   */
  credits: (Array<{
'user': SimpleUser;
'type': SecurityAdvisoryCreditTypes;
}>) | null;

  /**
   * The Common Vulnerabilities and Exposures (CVE) ID.
   */
  cve_id: string | null;
  cvss: {

/**
 * The CVSS vector.
 */
'vector_string': string | null;

/**
 * The CVSS score.
 */
'score': number | null;
};
  cwes: (Array<{

/**
 * The Common Weakness Enumeration (CWE) identifier.
 */
'cwe_id': string;

/**
 * The name of the CWE.
 */
'name': string;
}>) | null;

  /**
   * A detailed description of what the advisory entails.
   */
  description: string | null;

  /**
   * The GitHub Security Advisory ID.
   */
  ghsa_id: string;

  /**
   * The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.
   */
  github_reviewed_at: string | null;

  /**
   * The URL for the advisory.
   */
  html_url: string;
  identifiers: (Array<{

/**
 * The type of identifier.
 */
'type': 'CVE' | 'GHSA';

/**
 * The identifier value.
 */
'value': string;
}>) | null;

  /**
   * The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format.
   * This field is only populated when the advisory is imported from the National Vulnerability Database.
   */
  nvd_published_at: string | null;

  /**
   * The date and time of when the advisory was published, in ISO 8601 format.
   */
  published_at: string;
  references: Array<string> | null;

  /**
   * The API URL for the repository advisory.
   */
  repository_advisory_url: string | null;

  /**
   * The severity of the advisory.
   */
  severity: 'critical' | 'high' | 'medium' | 'low' | 'unknown';

  /**
   * The URL of the advisory's source code.
   */
  source_code_location: string | null;

  /**
   * A short summary of the advisory.
   */
  summary: string;

  /**
   * The type of advisory.
   */
  type: 'reviewed' | 'unreviewed' | 'malware';

  /**
   * The date and time of when the advisory was last updated, in ISO 8601 format.
   */
  updated_at: string;

  /**
   * The API URL for the advisory.
   */
  url: string;

  /**
   * The products and respective version ranges affected by the advisory.
   */
  vulnerabilities: Array<Vulnerability> | null;

  /**
   * The date and time of when the advisory was withdrawn, in ISO 8601 format.
   */
  withdrawn_at: string | null;
}
