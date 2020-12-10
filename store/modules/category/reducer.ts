import { createReducer } from 'typesafe-actions';

import { CategoryState, CategoryAction } from './types';
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR } from './actions';

const initialState: CategoryState = {
  categoryList: {
    loading: false,
    error: null,
    data: null
  }
};

const category = createReducer<CategoryState, CategoryAction>(initialState, {
  [GET_CATEGORIES]: state => ({
    ...state,
    categoryList: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_CATEGORIES_SUCCESS]: (state, action) => ({
    ...state,
    categoryList: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_CATEGORIES_ERROR]: (state, action) => ({
    ...state,
    categoryList: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default category;