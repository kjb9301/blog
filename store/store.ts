import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer, { rootSaga } from './modules'

export interface SagaStore extends Store<any, any> {
  sagaTask?: Task;
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =  process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  const store = createStore(rootReducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store;
};

export const wrapper = createWrapper(configureStore, {debug: true});