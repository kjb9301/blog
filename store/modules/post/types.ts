import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  posts: {
    loading: boolean;
    error: Error | null;
    data: any[] | null;
  };
};