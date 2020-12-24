import { createReducer } from 'typesafe-actions';

import { CategoryState, CategoryAction } from './types';
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, SET_CATEGORY, SET_MODE } from './actions';

const initialState: CategoryState = {
  categoryList: {
    loading: false,
    error: null,
    data: null
  },
  selectedCategory: '',
  darkMode: false,
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
  }),
  [SET_CATEGORY]: (state, action) => ({
    ...state,
    selectedCategory: action.payload,
  }),
  [SET_MODE]: (state, action) => ({
    ...state,
    darkMode: !state.darkMode,
  }),
});

export default category;