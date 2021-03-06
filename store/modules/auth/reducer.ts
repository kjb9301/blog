import { createReducer } from 'typesafe-actions';

import { AuthState, AuthAction } from './types';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR } from './actions';

const initialState: AuthState = {
  user: {
    loading: false,
    error: null,
    data: null,
  },
  login: {
    loading: false,
    error: null,
    data: null
  },
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [LOGIN]: state => ({
    ...state,
    login: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: action.payload
    },
  }),
  [LOGIN_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
  [GET_USER_INFO]: state => ({
    ...state,
    user: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: null,
      data: action.payload
    },
  }),
  [GET_USER_INFO_ERROR]: (state, action) => ({
    ...state,
    user: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
});

export default auth;