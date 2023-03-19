import Layout from '@/components/layout';
import SocialNetworks from '@/components/SocialNetworks';
import { Container, Heading, Text, Image, Flex } from '@chakra-ui/react';

export default function SobreMi() {
  return (
    <>
      <Layout>
        <Heading textAlign="center" mt={16}>
          About
        </Heading>

        <Flex direction="row" justify="center" align="center">
          <Image borderRadius="full" objectFit="cover" boxSize="110px" mt={4} mb={4} src="/assets/noe_pompeyo.jpg" alt="Noe Pompeyo" />
        </Flex>
        <Text align="center">Noe Pompeyo Martinez</Text>
        <Text align="center">Frontend Developer </Text>
        <Flex direction="row" justify="center" align="center">
          <SocialNetworks />
        </Flex>

        <Container h="100vh">
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
            Soy un apasionado por las tecnologías Web, estoy apendiendo programación con JavaScript JavaScript, React, NextJS, GitHub.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
