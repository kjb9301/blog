import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import post, { postSaga } from './post';
import category, { categorySaga } from './category';

const combineReducer = combineReducers({
  post,
  category,
});

const rootReducer = (state, action) => {
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
  yield all([postSaga(), categorySaga()]);
}