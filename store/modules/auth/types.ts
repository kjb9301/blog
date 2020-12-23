import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { User } from '../../../lib/types';

export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  user: {
    loading: boolean;
    error: Error | null;
    data: User | null;
  }
  login: {
    loading: boolean;
    error: Error | null;
    data: string | null;
  };
  isLoggedIn: boolean;
};