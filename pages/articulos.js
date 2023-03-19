import Layout from '@/components/layout';
import { ChakraProvider, Heading } from '@chakra-ui/react';

export default function SobreMi() {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Heading>Aqui deberian ir mis articulos</Heading>
        </Layout>
      </ChakraProvider>
    </>
  );
}
