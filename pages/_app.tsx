import { AppProps } from 'next/app';

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

export default BlogApp;
