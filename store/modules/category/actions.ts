import { createAsyncAction, createAction } from 'typesafe-actions';

export const GET_CATEGORIES = 'category/GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'category/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'category/GET_CATEGORIES_ERROR';

export const SET_CATEGORY = 'category/SET_CATEGORY';
export const SET_MODE = 'category/SET_MODE';

export const getCategoriesAsync = createAsyncAction(
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
)<void, string[], Error>();

export const setCategory = createAction(SET_CATEGORY, ctg => ctg)();
export const setMode = createAction(SET_MODE)();
