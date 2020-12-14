import { createReducer } from 'typesafe-actions';

import { AuthState, AuthAction } from './types';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, AUTH_LOGIN } from './actions';

const initialState: AuthState = {
  login: {
    loading: false,
    error: null,
    data: null
  },
  isLoggedIn: false,
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
    isLoggedIn: !state.isLoggedIn
  }),
  [LOGIN_ERROR]: (state, action) => ({
    ...state,
    login: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
  [AUTH_LOGIN]: (state, action) => ({
    ...state,
    isLoggedIn: action.payload
  }),
});

export default auth;