import { createAsyncAction, createAction } from 'typesafe-actions';

import { Login } from '../../../lib/types';

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';

export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';

export const AUTH_LOGIN = 'auth/AUTH_LOGIN';

export const loginAsync = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
)<Login, string, Error>();

export const logoutAsync = createAsyncAction(
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
)<void, string, Error>();

export const authLogin = createAction(AUTH_LOGIN, auth => auth)();

