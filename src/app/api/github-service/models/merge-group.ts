/* tslint:disable */
/* eslint-disable */
import { SimpleCommit } from '../models/simple-commit';

/**
 * A group of pull requests that the merge queue has grouped together to be merged.
 */
export interface MergeGroup {

  /**
   * The full ref of the branch the merge group will be merged into.
   */
  base_ref: string;

  /**
   * The SHA of the merge group's parent commit.
   */
  base_sha: string;
  head_commit: SimpleCommit;

  /**
   * The full ref of the merge group.
   */
  head_ref: string;

  /**
   * The SHA of the merge group.
   */
  head_sha: string;
}
