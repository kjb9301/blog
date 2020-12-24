import { AppProps, AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { wrapper } from '../store/store'
import GlobalStyles from '../lib/styles/global-styles';
import { darkTheme, lightTheme } from '../lib/styles/theme';
import { RootState } from '../store/modules';

import Template from '../components/common/Template';

interface CustomAppProps extends AppProps {
  isLoggedIn: boolean;
}

function BlogApp({ Component, pageProps, isLoggedIn }: CustomAppProps) {
  const { darkMode } = useSelector((state: RootState) => state.category);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Template>
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
      </Template>
    </ThemeProvider>
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
