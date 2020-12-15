import { call, put, takeEvery } from 'redux-saga/effects';
import Router from 'next/router';

import { loginAsync, logoutAsync, LOGIN, LOGOUT } from './actions';
import { login, logout } from '../../../lib/apis/auth';

function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    const result = yield call(login, action.payload);
    yield put(loginAsync.success(result));
    yield call(Router.push, '/', '/', {shallow: true});
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

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}