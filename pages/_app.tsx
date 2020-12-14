import { AppProps } from 'next/app';
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
  console.log('isServer', isServer)
  const cookie = isServer ? ctx.req.headers.cookie : '';
  if (isServer) {
    const isLoggedIn = cookie ? true : false;
    console.log('cookie', ctx.req.headers.cookie);
    console.log('isLoggedIn', isLoggedIn);
    await ctx.store.dispatch(authLogin(isLoggedIn));
    ctx.store.dispatch(END);

    await ctx.store.sagaTask.toPromise();
  }

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default wrapper.withRedux(withReduxSaga(BlogApp));
