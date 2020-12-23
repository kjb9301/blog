import { call, put, takeEvery } from 'redux-saga/effects';
import Router from 'next/router';

import { loginAsync, logoutAsync, getUserInfoAsync, LOGIN, LOGOUT, GET_USER_INFO } from './actions';
import { login, logout, GetUserInfo } from '../../../lib/apis/auth';

function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    const result = yield call(login, action.payload);
    yield put(loginAsync.success(result));
    yield call(Router.push, '/');
  } catch (err) {
    yield put(loginAsync.failure(err));
  }
}

function* logoutSaga() {
  try {
    const result = yield call(logout);
    yield put(logoutAsync.success(result));
    yield call(Router.push, '/');
  } catch (err) {
    yield put(logoutAsync.failure(err));
  }
}

function* getUserInfoSaga() {
  try {
    const result = yield call(GetUserInfo);
    console.log(result)
    yield put(getUserInfoAsync.success(result));
  } catch(err) {
    yield put(getUserInfoAsync.failure(err));
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}