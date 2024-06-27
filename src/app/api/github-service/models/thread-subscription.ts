/* tslint:disable */
/* eslint-disable */

/**
 * Thread Subscription
 */
export interface ThreadSubscription {
  created_at: string | null;
  ignored: boolean;
  reason: string | null;
  repository_url?: string;
  subscribed: boolean;
  thread_url?: string;
  url: string;
}
