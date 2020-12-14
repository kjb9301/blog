import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export type AuthState = {
  login: {
    loading: boolean;
    error: Error | null;
    data: string | null;
  };
  isLoggedIn: boolean;
};