/* tslint:disable */
/* eslint-disable */
import { SimpleRepository } from '../models/simple-repository';

/**
 * Repositories associated with a code security configuration and attachment status
 */
export interface CodeSecurityConfigurationRepositories {
  repository?: SimpleRepository;

  /**
   * The attachment status of the code security configuration on the repository.
   */
  status?: 'attached' | 'attaching' | 'detached' | 'enforced' | 'failed' | 'updating';
}
