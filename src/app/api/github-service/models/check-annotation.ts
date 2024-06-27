/* tslint:disable */
/* eslint-disable */

/**
 * Check Annotation
 */
export interface CheckAnnotation {
  annotation_level: string | null;
  blob_href: string;
  end_column: number | null;
  end_line: number;
  message: string | null;
  path: string;
  raw_details: string | null;
  start_column: number | null;
  start_line: number;
  title: string | null;
}
