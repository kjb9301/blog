import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import withReduxSaga from 'next-redux-saga';
import rootReducer, {rootSaga} from './modules'

const configureStore: MakeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =  composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga)

  return store;
};

export const reduxWrapper = createWrapper(configureStore);