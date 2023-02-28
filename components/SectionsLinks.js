import NextLink from "next/link"
import {  Text, Box, ChakraProvider, Container, Flex, Heading, HStack, Spacer } from "@chakra-ui/react"

const SectionLinkItem = (NextLink);


export default function SectionsLinks() {

    const section = [
        {name : "🏠", url: "/"},
        {name : "Acerca de", url: "/sobre-mi"},
        {name : "Artículos", url: "/articulos"},
        {name : "Proyectos", url: "/proyectos"}

    ];
return (
  <nav>
    <Flex as="nav" p="40px" alignItems="center">
      <HStack spacing="20px">
        {section.map(({ name, url }) => (
          <SectionLinkItem key={name} href={url} passHref>
            {name}
          </SectionLinkItem>
        ))}
      </HStack>
    </Flex>
  </nav>
);
}