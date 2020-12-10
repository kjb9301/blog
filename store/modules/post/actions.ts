import { createAsyncAction } from 'typesafe-actions';

import { Post } from '../../../lib/types'

export const GET_POSTS = 'post/GET_POSTS';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'post/GET_POSTS_ERROR';

export const GET_POST = 'post/GET_POST';
export const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
export const GET_POST_ERROR = 'post/GET_POST_ERROR';

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