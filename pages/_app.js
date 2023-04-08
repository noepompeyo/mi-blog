import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import GAScript from '../components/GoogleAnalitics';
import MDXComponents from '../components/MDXComponents';
import theme from '../components/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MDXProvider components={MDXComponents}>
        <ChakraProvider  theme={theme}>
          <GAScript />
          <Component {...pageProps} />;
        </ChakraProvider>
      </MDXProvider>
    </>
  );
}
