/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { FullRepository } from '../models/full-repository';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SecurityAndAnalysis } from '../models/security-and-analysis';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookSecurityAndAnalysis {
  changes: {
'from'?: {
'security_and_analysis'?: SecurityAndAnalysis | null;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: FullRepository;
  sender?: SimpleUserWebhooks;
}
