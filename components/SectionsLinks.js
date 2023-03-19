import NextLink from 'next/link';
import { Text, Flex, HStack } from '@chakra-ui/react';

const SectionLinkItem = NextLink;

export const SectionsLinks = () => {
  const section = [
    { name: '🏠', url: '/' },
    { name: 'Acerca de', url: '/sobre-mi' },
    { name: 'Artículos', url: '/articulos' },
    { name: 'Proyectos', url: '/proyectos' },
  ];
  return (
    <nav>
      <Flex as="nav" p="40px" alignItems="center">
        <HStack spacing="14px">
          {section.map(({ name, url }) => (
            <SectionLinkItem key={name} href={url} passHref>
              <Text as="kbd" _hover={{ borderBottom: '1px', borderColor: 'white' }}>
                {name}
              </Text>
            </SectionLinkItem>
          ))}
        </HStack>
      </Flex>
    </nav>
  );
};
