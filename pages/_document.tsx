import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import {
  RenderPage,
  NextComponentType,
  AppContextType,
  AppInitialProps,
  AppPropsType,
  DocumentInitialProps,
} from 'next/dist/next-server/lib/utils';
import { NextRouter } from 'next/router';
import { ServerStyleSheet } from 'styled-components';

class BlogDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage: RenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (
            App: NextComponentType<
              AppContextType<NextRouter>,
              AppInitialProps,
              AppPropsType<NextRouter, {}>
            >
          ) => (props: any) =>
              sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        ctx
      );

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (err) {
      throw err;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
