/* tslint:disable */
/* eslint-disable */
import { Discussion } from '../models/discussion';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookDiscussionCategoryChanged {
  action: 'category_changed';
  changes: {
'category': {
'from': {
'created_at': string;
'description': string;
'emoji': string;
'id': number;
'is_answerable': boolean;
'name': string;
'node_id'?: string;
'repository_id': number;
'slug': string;
'updated_at': string;
};
};
};
  discussion: Discussion;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
