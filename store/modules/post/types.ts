import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

import { Post } from '../../../lib/types'

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  posts: {
    loading: boolean;
    error: Error | null;
    data: Post[] | null;
  };
  post: {
    loading: boolean;
    error: Error | null;
    data: Post | null;
  };
  postResult: {
    loading: boolean,
    error: Error | null,
    data: string | null,
  };
};