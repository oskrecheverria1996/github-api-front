/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryRule } from '../models/repository-rule';
import { RepositoryRuleset } from '../models/repository-ruleset';
import { RepositoryRulesetConditions } from '../models/repository-ruleset-conditions';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookRepositoryRulesetEdited {
  action: 'edited';
  changes?: {
'name'?: {
'from'?: string;
};
'enforcement'?: {
'from'?: string;
};
'conditions'?: {
'added'?: Array<RepositoryRulesetConditions>;
'deleted'?: Array<RepositoryRulesetConditions>;
'updated'?: Array<{
'condition'?: RepositoryRulesetConditions;
'changes'?: {
'condition_type'?: {
'from'?: string;
};
'target'?: {
'from'?: string;
};
'include'?: {
'from'?: Array<string>;
};
'exclude'?: {
'from'?: Array<string>;
};
};
}>;
};
'rules'?: {
'added'?: Array<RepositoryRule>;
'deleted'?: Array<RepositoryRule>;
'updated'?: Array<{
'rule'?: RepositoryRule;
'changes'?: {
'configuration'?: {
'from'?: string;
};
'rule_type'?: {
'from'?: string;
};
'pattern'?: {
'from'?: string;
};
};
}>;
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  repository_ruleset: RepositoryRuleset;
  sender: SimpleUserWebhooks;
}
