import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import post, { postSaga } from './post';
import category, { categorySaga } from './category';
import auth, { authSaga } from './auth';

const combineReducer = combineReducers({
  post,
  category,
  auth
});

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      console.log('hydrate', action);
      return action.payload;
    default:
      return combineReducer(state, action);
  }
}

export default rootReducer;

export type RootState = ReturnType<typeof combineReducer>;

export function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(categorySaga),
    fork(authSaga)
  ]);
}