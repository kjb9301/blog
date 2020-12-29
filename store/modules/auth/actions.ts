import { createAsyncAction } from 'typesafe-actions';

import { Login, User } from '../../../lib/types';

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';

export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';

export const GET_USER_INFO = 'auth/GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'auth/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'auth/GET_USER_INFO_ERROR';

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

export const getUserInfoAsync = createAsyncAction(
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR
)<void, User, Error>();
