import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import withReduxSaga from 'next-redux-saga';

const configureStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =  composeWithDevTools(applyMiddleware(...middlewares));
  const dummy = () => console.log('reducer')
  const store = createStore(dummy, {}, enhancer);

  return store;
};

export const reduxWrapper = createWrapper(configureStore);