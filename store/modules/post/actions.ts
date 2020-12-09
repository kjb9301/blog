import { createAsyncAction } from 'typesafe-actions';

import { Post } from '../../../lib/types'

export const GET_POSTS = 'post/GET_POSTS';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'post/GET_POSTS_ERROR';

export const getPostsAsync = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
)<void, Post[], Error>();