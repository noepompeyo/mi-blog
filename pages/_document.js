import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script';
import theme from '../components/theme';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F786M9B6B9"></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-F786M9B6B9');`,
          }}
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.initialColorMode}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
