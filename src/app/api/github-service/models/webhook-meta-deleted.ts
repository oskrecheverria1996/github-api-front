/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { NullableRepositoryWebhooks } from '../models/nullable-repository-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookMetaDeleted {
  action: 'deleted';
  enterprise?: EnterpriseWebhooks;

  /**
   * The modified webhook. This will contain different keys based on the type of webhook it is: repository, organization, business, app, or GitHub Marketplace.
   */
  hook: {
'active': boolean;
'config': {
'content_type': 'json' | 'form';
'insecure_ssl': string;
'secret'?: string;
'url': string;
};
'created_at': string;
'events': Array<'*' | 'branch_protection_rule' | 'check_run' | 'check_suite' | 'code_scanning_alert' | 'commit_comment' | 'create' | 'delete' | 'deployment' | 'deployment_status' | 'deploy_key' | 'discussion' | 'discussion_comment' | 'fork' | 'gollum' | 'issues' | 'issue_comment' | 'label' | 'member' | 'membership' | 'meta' | 'milestone' | 'organization' | 'org_block' | 'package' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'pull_request_review_thread' | 'push' | 'registry_package' | 'release' | 'repository' | 'repository_import' | 'repository_vulnerability_alert' | 'secret_scanning_alert' | 'secret_scanning_alert_location' | 'security_and_analysis' | 'star' | 'status' | 'team' | 'team_add' | 'watch' | 'workflow_job' | 'workflow_run' | 'repository_dispatch' | 'projects_v2_item'>;
'id': number;
'name': string;
'type': string;
'updated_at': string;
};

  /**
   * The id of the modified webhook.
   */
  hook_id: number;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: NullableRepositoryWebhooks | null;
  sender?: SimpleUserWebhooks;
}
