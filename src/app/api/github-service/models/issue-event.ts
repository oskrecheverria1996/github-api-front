/* tslint:disable */
/* eslint-disable */
import { AuthorAssociation } from '../models/author-association';
import { IssueEventDismissedReview } from '../models/issue-event-dismissed-review';
import { IssueEventLabel } from '../models/issue-event-label';
import { IssueEventMilestone } from '../models/issue-event-milestone';
import { IssueEventProjectCard } from '../models/issue-event-project-card';
import { IssueEventRename } from '../models/issue-event-rename';
import { NullableIntegration } from '../models/nullable-integration';
import { NullableIssue } from '../models/nullable-issue';
import { NullableSimpleUser } from '../models/nullable-simple-user';
import { Team } from '../models/team';

/**
 * Issue Event
 */
export interface IssueEvent {
  actor: NullableSimpleUser | null;
  assignee?: NullableSimpleUser | null;
  assigner?: NullableSimpleUser | null;
  author_association?: AuthorAssociation;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  dismissed_review?: IssueEventDismissedReview;
  event: string;
  id: number;
  issue?: NullableIssue | null;
  label?: IssueEventLabel;
  lock_reason?: string | null;
  milestone?: IssueEventMilestone;
  node_id: string;
  performed_via_github_app?: NullableIntegration | null;
  project_card?: IssueEventProjectCard;
  rename?: IssueEventRename;
  requested_reviewer?: NullableSimpleUser | null;
  requested_team?: Team;
  review_requester?: NullableSimpleUser | null;
  url: string;
}
