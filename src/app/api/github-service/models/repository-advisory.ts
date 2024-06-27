/* tslint:disable */
/* eslint-disable */
import { RepositoryAdvisoryCredit } from '../models/repository-advisory-credit';
import { RepositoryAdvisoryVulnerability } from '../models/repository-advisory-vulnerability';
import { SecurityAdvisoryCreditTypes } from '../models/security-advisory-credit-types';
import { SimpleRepository } from '../models/simple-repository';
import { SimpleUser } from '../models/simple-user';
import { Team } from '../models/team';

/**
 * A repository security advisory.
 */
export interface RepositoryAdvisory {

  /**
   * The author of the advisory.
   */
  author: SimpleUser | null;

  /**
   * The date and time of when the advisory was closed, in ISO 8601 format.
   */
  closed_at: string | null;

  /**
   * A list of teams that collaborate on the advisory.
   */
  collaborating_teams: Array<Team> | null;

  /**
   * A list of users that collaborate on the advisory.
   */
  collaborating_users: Array<SimpleUser> | null;

  /**
   * The date and time of when the advisory was created, in ISO 8601 format.
   */
  created_at: string | null;
  credits: (Array<{

/**
 * The username of the user credited.
 */
'login'?: string;
'type'?: SecurityAdvisoryCreditTypes;
}>) | null;
  credits_detailed: Array<RepositoryAdvisoryCredit> | null;

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

  /**
   * A list of only the CWE IDs.
   */
  cwe_ids: Array<string> | null;
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
   * The URL for the advisory.
   */
  html_url: string;
  identifiers: Array<{

/**
 * The type of identifier.
 */
'type': 'CVE' | 'GHSA';

/**
 * The identifier value.
 */
'value': string;
}>;

  /**
   * A temporary private fork of the advisory's repository for collaborating on a fix.
   */
  private_fork: SimpleRepository | null;

  /**
   * The date and time of when the advisory was published, in ISO 8601 format.
   */
  published_at: string | null;

  /**
   * The publisher of the advisory.
   */
  publisher: SimpleUser | null;

  /**
   * The severity of the advisory.
   */
  severity: ('critical' | 'high' | 'medium' | 'low') | null;

  /**
   * The state of the advisory.
   */
  state: 'published' | 'closed' | 'withdrawn' | 'draft' | 'triage';
  submission: ({

/**
 * Whether a private vulnerability report was accepted by the repository's administrators.
 */
'accepted': boolean;
}) | null;

  /**
   * A short summary of the advisory.
   */
  summary: string;

  /**
   * The date and time of when the advisory was last updated, in ISO 8601 format.
   */
  updated_at: string | null;

  /**
   * The API URL for the advisory.
   */
  url: string;
  vulnerabilities: Array<RepositoryAdvisoryVulnerability> | null;

  /**
   * The date and time of when the advisory was withdrawn, in ISO 8601 format.
   */
  withdrawn_at: string | null;
}
