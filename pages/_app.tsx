import { AppProps, AppContext } from 'next/app';

import { wrapper } from '../store/store'
import GlobalStyles from '../lib/styles/global-styles';

import Template from '../components/common/Template';

interface CustomAppProps extends AppProps {
  isLoggedIn: boolean;
}

function BlogApp({ Component, pageProps, isLoggedIn }: CustomAppProps) {
  return (
    <>
      <GlobalStyles />
      <Template>
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
      </Template>
    </>
  );
}

BlogApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const isServer = ctx.req;
  const cookie = isServer ? ctx.req?.headers.cookie : '';
  const isLoggedIn = cookie ? true : false;

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps, isLoggedIn }

};

export default wrapper.withRedux(BlogApp);
