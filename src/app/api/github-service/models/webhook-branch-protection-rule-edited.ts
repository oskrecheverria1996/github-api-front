/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksRule } from '../models/webhooks-rule';
export interface WebhookBranchProtectionRuleEdited {
  action: 'edited';

  /**
   * If the action was `edited`, the changes to the rule.
   */
  changes?: {
'admin_enforced'?: {
'from': boolean | null;
};
'authorized_actor_names'?: {
'from': Array<string>;
};
'authorized_actors_only'?: {
'from': boolean | null;
};
'authorized_dismissal_actors_only'?: {
'from': boolean | null;
};
'linear_history_requirement_enforcement_level'?: {
'from': 'off' | 'non_admins' | 'everyone';
};
'lock_branch_enforcement_level'?: {
'from': 'off' | 'non_admins' | 'everyone';
};
'lock_allows_fork_sync'?: {
'from': boolean | null;
};
'pull_request_reviews_enforcement_level'?: {
'from': 'off' | 'non_admins' | 'everyone';
};
'require_last_push_approval'?: {
'from': boolean | null;
};
'required_status_checks'?: {
'from': Array<string>;
};
'required_status_checks_enforcement_level'?: {
'from': 'off' | 'non_admins' | 'everyone';
};
};
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  rule: WebhooksRule;
  sender: SimpleUserWebhooks;
}
