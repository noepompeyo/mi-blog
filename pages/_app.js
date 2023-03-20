import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import GAScript from '../components/GoogleAnalitics';
import MDXComponents from '../components/MDXComponents';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MDXProvider components={MDXComponents}>
        <ChakraProvider>
          <GAScript />
          <Component {...pageProps} />;
        </ChakraProvider>
      </MDXProvider>
    </>
  );
}
