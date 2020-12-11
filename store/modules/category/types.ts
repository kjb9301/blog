import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type CategoryAction = ActionType<typeof actions>;

export type CategoryState = {
  categoryList: {
    loading: boolean;
    error: Error | null;
    data: string[] | null;
  };
  selectedCategory: string;
};