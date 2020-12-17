import { createAsyncAction } from 'typesafe-actions';

import { Post, PostForm } from '../../../lib/types'

export const GET_POSTS = 'post/GET_POSTS';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'post/GET_POSTS_ERROR';

export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_ERROR = 'post/GET_POST_ERROR';

export const CREATE_POST = 'post/CREATE_POST';
export const CREATE_POST_SUCCESS = 'post/CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'post/CREATE_POST_ERROR';

export const REMOVE_POST = 'post/REMOVE_POST';
export const REMOVE_POST_SUCCESS = 'post/REMOVE_POST_SUCCESS';
export const REMOVE_POST_ERROR = 'post/REMOVE_POST_ERROR';

export const getPostsAsync = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
)<string, Post[], Error>();

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR
)<string, Post, Error>();

export const createPostAsync = createAsyncAction(
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR
)<PostForm, string, Error>();

export const removePostAsync = createAsyncAction(
  REMOVE_POST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_ERROR
)<string, string, Error>();
