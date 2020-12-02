import { AppProps } from 'next/app';

import Template from '../components/common/Template';

function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default BlogApp;
