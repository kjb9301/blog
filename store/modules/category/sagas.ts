import { getCategoriesAsync, GET_CATEGORIES } from './actions';
import { GetCategories } from '../../../lib/apis/category';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getCategoriesSaga() {
  try {
    const categoryList = yield call(GetCategories);
    yield put(getCategoriesAsync.success(categoryList));
  } catch (err) {
    yield put(getCategoriesAsync.failure(err));
  }
}

export function* categorySaga() {
  yield takeEvery(GET_CATEGORIES, getCategoriesSaga);
}