/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookGollum {
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;

  /**
   * The pages that were updated.
   */
  pages: Array<{

/**
 * The action that was performed on the page. Can be `created` or `edited`.
 */
'action': 'created' | 'edited';

/**
 * Points to the HTML wiki page.
 */
'html_url': string;

/**
 * The name of the page.
 */
'page_name': string;

/**
 * The latest commit SHA of the page.
 */
'sha': string;
'summary': string | null;

/**
 * The current page title.
 */
'title': string;
}>;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
