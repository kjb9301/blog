import { getPostsAsync, GET_POSTS } from './actions';
import { GetPosts } from '../../../lib/apis/post';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getPostsSaga() {
  console.log('saga')
  try {
    const posts = yield call(GetPosts);
    console.log(posts)
    yield put(getPostsAsync.success(posts));
  } catch (e) {
    yield put(getPostsAsync.failure(e));
  }
}

export function* postSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}