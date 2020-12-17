import { createReducer } from 'typesafe-actions';
import { PostState, PostAction } from './types';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR, GET_POST, GET_POST_SUCCESS, GET_POST_ERROR, CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_ERROR, REMOVE_POST, REMOVE_POST_SUCCESS, REMOVE_POST_ERROR } from './actions';

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
  },
  postResult: {
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
  }),
  [CREATE_POST]: state => ({
    ...state,
    postResult: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [CREATE_POST_SUCCESS]: (state, action) => ({
    ...state,
    postResult: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [CREATE_POST_ERROR]: (state, action) => ({
    ...state,
    postResult: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
  [REMOVE_POST]: state => ({
    ...state,
    postResult: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [REMOVE_POST_SUCCESS]: (state, action) => ({
    ...state,
    postResult: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [REMOVE_POST_ERROR]: (state, action) => ({
    ...state,
    postResult: {
      loading: false,
      error: action.payload,
      data: null
    }
  }),
});

export default post;