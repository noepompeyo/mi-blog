import Layout from '@/components/layout';
import SocialNetworks from '@/components/SocialNetworks';
import { Container, Heading, Text, Image, Flex } from '@chakra-ui/react';

export default function SobreMi() {
  return (
    <>
      <Layout>
        <Heading textAlign="left" mt={2}>
          About
        </Heading>

        <Flex direction="row" justify="center" align="center">
          <Image borderRadius={8} objectFit="cover" boxSize="150px" mt={4} mb={4} src="/assets/noe-pompeyo.png" alt="Noe Pompeyo" />
        </Flex>
        <Text align="center">Noe Pompeyo Martinez</Text>
        <Text align="center">Frontend Developer </Text>
        <Flex direction="row" justify="center" align="center">
          <SocialNetworks />
        </Flex>

        <Container mb={16}>
          <Text as="h2" fontSize={18} mt={2}>
            ¿Quién es Noe Pompeyo?
          </Text>
          <Text as="h3" fontSize={14} ml={2} mt={2}>
            Mexicano, originario de Veracruz, actualmente viviendo en Guadalajara, mi principal reto es ser frontend developer.
          </Text>

          <Text as="h2" fontSize={18} mt={2}>
            Especialidades
          </Text>
          <Text as="h3" fontSize={14} ml={2} mt={2}>
            Soy un apasionado por las tecnologías Web, estoy apendiendo programación con JavaScript, React, NextJS, GitHub, ChakraUI.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
