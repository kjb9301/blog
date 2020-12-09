import { AppProps } from 'next/app';
import withReduxSaga from 'next-redux-saga';

import { wrapper } from '../store/store'
import GlobalStyles from '../lib/styles/global-styles';

import Template from '../components/common/Template';

function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Template>
        <Component {...pageProps} />
      </Template>
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(BlogApp));
