import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers, AnyAction } from 'redux';
import { all } from 'redux-saga/effects';

import post, { postSaga } from './post';
import category, { categorySaga } from './category';

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      console.log('hydrate', action);
      return action.payload;
    default:
      const combineReducer = combineReducers({
        post,
        category,
      });
      return combineReducer(state, action)
  }
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postSaga(), categorySaga()]);
}