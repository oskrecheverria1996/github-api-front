/* tslint:disable */
/* eslint-disable */

/**
 * An enterprise on GitHub. Webhook payloads contain the `enterprise` property when the webhook is configured
 * on an enterprise account or an organization that's part of an enterprise account. For more information,
 * see "[About enterprise accounts](https://docs.github.com/admin/overview/about-enterprise-accounts)."
 */
export interface EnterpriseWebhooks {
  avatar_url: string;
  created_at: string | null;

  /**
   * A short description of the enterprise.
   */
  description?: string | null;
  html_url: string;

  /**
   * Unique identifier of the enterprise
   */
  id: number;

  /**
   * The name of the enterprise.
   */
  name: string;
  node_id: string;

  /**
   * The slug url identifier for the enterprise.
   */
  slug: string;
  updated_at: string | null;

  /**
   * The enterprise's website URL.
   */
  website_url?: string | null;
}
