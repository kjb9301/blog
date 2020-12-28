import Router from 'next/router';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getPostsAsync, GET_POSTS, getPostAsync, GET_POST, createPostAsync, CREATE_POST, removePostAsync, REMOVE_POST, updatePostAsync, UPDATE_POST } from './actions';
import { GetPosts, GetPost, AddPost, DeletePost, UpdatePost } from '../../../lib/apis/post';

function* getPostsSaga() {
  try {
    const posts = yield call(GetPosts)
    yield put(getPostsAsync.success(posts));
  } catch (err) {
    yield put(getPostsAsync.failure(err));
  }
}

function* getPostSaga(action: ReturnType<typeof getPostAsync.request>) {
  try {
    const id = action.payload;
    const post = yield call(GetPost, id);
    yield put(getPostAsync.success(post));
  }catch(err) {
    yield put(getPostAsync.failure(err))
  }
}

function* createPostSaga(action: ReturnType<typeof createPostAsync.request>) {
  try {
    const result = yield call(AddPost, action.payload);
    yield put(createPostAsync.success(result));
    yield call(Router.push, '/');
  }catch(err) {
    yield put(createPostAsync.failure(err));
  }
}

function* removePostSaga(action: ReturnType<typeof removePostAsync.request>) {
  try {
    const result = yield call(DeletePost, action.payload);
    yield put(removePostAsync.success(result));
    yield call(Router.push, '/');
  }catch(err) {
    yield put(removePostAsync.failure(err));
  }
}

function* updatePostSaga(action: ReturnType<typeof updatePostAsync.request>) {
  try {
    const {status, id} = yield call(UpdatePost, action.payload);
    yield put(updatePostAsync.success(status));
    yield call(Router.push, `/post/${id}`);
  }catch(err) {
    yield put(updatePostAsync.failure(err));
  }
}

export function* postSaga() {
  yield all([
    takeLatest(GET_POSTS, getPostsSaga),
    takeLatest(GET_POST, getPostSaga),
    takeLatest(CREATE_POST, createPostSaga),
    takeLatest(REMOVE_POST, removePostSaga),
    takeLatest(UPDATE_POST, updatePostSaga),
  ])
}