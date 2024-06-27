/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookSecurityAdvisoryWithdrawn {
  action: 'withdrawn';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;

  /**
   * The details of the security advisory, including summary, description, and severity.
   */
  security_advisory: {
'cvss': {
'score': number;
'vector_string': string | null;
};
'cwes': Array<{
'cwe_id': string;
'name': string;
}>;
'description': string;
'ghsa_id': string;
'identifiers': Array<{
'type': string;
'value': string;
}>;
'published_at': string;
'references': Array<{
'url': string;
}>;
'severity': string;
'summary': string;
'updated_at': string;
'vulnerabilities': Array<{
'first_patched_version': ({
'identifier': string;
}) | null;
'package': {
'ecosystem': string;
'name': string;
};
'severity': string;
'vulnerable_version_range': string;
}>;
'withdrawn_at': string;
};
  sender?: SimpleUserWebhooks;
}
