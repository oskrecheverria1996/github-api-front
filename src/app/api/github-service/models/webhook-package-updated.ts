/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhookRubygemsMetadata } from '../models/webhook-rubygems-metadata';
export interface WebhookPackageUpdated {
  action: 'updated';
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;

  /**
   * Information about the package.
   */
  package: {
'created_at': string;
'description': string | null;
'ecosystem': string;
'html_url': string;
'id': number;
'name': string;
'namespace': string;
'owner': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'package_type': string;
'package_version': {
'author': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'body': string;
'body_html': string;
'created_at': string;
'description': string;
'docker_metadata'?: Array<{
'tags'?: Array<string>;
}>;
'draft'?: boolean;
'html_url': string;
'id': number;
'installation_command': string;
'manifest'?: string;
'metadata': Array<{
[key: string]: any;
}>;
'name': string;
'package_files': Array<{
'content_type': string;
'created_at': string;
'download_url': string;
'id': number;
'md5': string | null;
'name': string;
'sha1': string | null;
'sha256': string;
'size': number;
'state': string;
'updated_at': string;
}>;
'package_url'?: string;
'prerelease'?: boolean;
'release'?: {
'author': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'created_at': string;
'draft': boolean;
'html_url': string;
'id': number;
'name': string;
'prerelease': boolean;
'published_at': string;
'tag_name': string;
'target_commitish': string;
'url': string;
};
'rubygems_metadata'?: Array<WebhookRubygemsMetadata>;
'source_url'?: string;
'summary': string;
'tag_name'?: string;
'target_commitish': string;
'target_oid': string;
'updated_at': string;
'version': string;
};
'registry': ({
'about_url': string;
'name': string;
'type': string;
'url': string;
'vendor': string;
}) | null;
'updated_at': string;
};
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
