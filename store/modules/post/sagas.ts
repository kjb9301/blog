import Router from 'next/router';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getPostsAsync, GET_POSTS, getPostAsync, GET_POST, createPostAsync, CREATE_POST, removePostAsync, REMOVE_POST } from './actions';
import { GetPosts, GetPost, AddPost, DeletePost } from '../../../lib/apis/post';

function* getPostsSaga(action?: ReturnType<typeof getPostsAsync.request>) {
  try {
    const posts = yield call(GetPosts, action.payload);
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

export function* postSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(CREATE_POST, createPostSaga);
  yield takeEvery(REMOVE_POST, removePostSaga);
}