import { createReducer } from 'typesafe-actions';
import { PostState, PostAction } from './types';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR, GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from './actions';

const initialState: PostState = {
  posts: {
    loading: false,
    error: null,
    data: null
  },
  post: {
    loading: false,
    error: null,
    data: null,
  }
};

const post = createReducer<PostState, PostAction>(initialState, {
  [GET_POSTS]: state => ({
    ...state,
    posts: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    posts: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    posts: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
  [GET_POST]: state => ({
    ...state,
    post: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_POST_ERROR]: (state, action) => ({
    ...state,
    post: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default post;