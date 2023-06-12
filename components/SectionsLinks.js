import NextLink from 'next/link';
import section from '@/data/sections';
import { Text, HStack, useColorMode, IconButton, Grid } from '@chakra-ui/react';
import { BsFillMoonFill, BsFillBrightnessHighFill } from 'react-icons/bs';

const SectionLinkItem = NextLink;

export const SectionsLinks = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'dark';
  return (
    <nav>
      <Grid as="nav" pt="40px" mb={[4, 0]}>
        <HStack spacing={['18px', '24px']}>
          {section.map(({ name, url }) => (
            <SectionLinkItem key={name} href={url} passHref>
              <Text as="kbd" _hover={{ borderBottom: '1px', borderColor: 'white' }}>
                {name}
              </Text>
            </SectionLinkItem>
          ))}

          <IconButton icon={isLight ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />} onClick={toggleColorMode}></IconButton>
        </HStack>
      </Grid>
    </nav>
  );
};
