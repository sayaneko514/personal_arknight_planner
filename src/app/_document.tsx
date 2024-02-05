// app/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Any other tags you want to include in the <head> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Here you can include the script to prevent FOUC for theme */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // If localStorage is available, use the saved theme
                if (typeof localStorage !== 'undefined') {
                  const theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                }
              })();
            `,
          }}></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
