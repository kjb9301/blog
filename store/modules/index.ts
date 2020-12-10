import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import post, { postSaga } from './post';
import category, { categorySaga } from './category';

const rootReducer = combineReducers({
  post,
  category,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postSaga(), categorySaga()]);
}