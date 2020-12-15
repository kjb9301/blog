import { AppProps, AppContext } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import { END } from 'redux-saga';

import { wrapper } from '../store/store'
import GlobalStyles from '../lib/styles/global-styles';
import { authLogin } from '../store/modules/auth';

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

BlogApp.getInitialProps = async ({ Component, ctx }) => {
  const isServer = ctx.req;
  const cookie = isServer ? ctx.req.headers.cookie : '';
  const isLoggedIn = cookie ? true : false;

  await ctx.store.dispatch(authLogin(isLoggedIn));

};

export default wrapper.withRedux(withReduxSaga(BlogApp));
