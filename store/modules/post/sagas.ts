import { getPostsAsync, GET_POSTS, getPostAsync, GET_POST } from './actions';
import { GetPosts, GetPost } from '../../../lib/apis/post';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getPostsSaga() {
  try {
    const posts = yield call(GetPosts);
    yield put(getPostsAsync.success(posts));
  } catch (e) {
    yield put(getPostsAsync.failure(e));
  }
}

function* getPostSaga(action) {
  const id = action.payload;
  try {
    const post = yield call(GetPost, id);
    yield put(getPostAsync.success(post));
  }catch(err) {
    yield put(getPostAsync.failure(err))
  }
}

export function* postSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}