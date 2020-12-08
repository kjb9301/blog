import { AppProps } from 'next/app';

import GlobalStyles from '../lib/styles/global-styles';
import { reduxWrapper } from '../store/store'

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

BlogApp.getInitialProps = async ({ ctx }) => {
  console.log('ctx', ctx.store)
}

export default reduxWrapper.withRedux(BlogApp);
