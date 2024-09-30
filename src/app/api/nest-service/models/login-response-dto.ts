/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface LoginResponseDto {
  token: string;
  user: User;
}
