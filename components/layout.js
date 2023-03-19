import { Box, Flex } from '@chakra-ui/react';
import { Footer } from './Footer';
import { SectionsLinks } from './SectionsLinks';

export const Layout = ({ children }) => {
  return (
    <>
      <Box w="100%" h="100vh" bg="gray.900" borderTop="10px solid" borderColor="orange.300" color="white" display="flex">
        <Box maxW="736px" m="auto">
          <Box position="absolute" top="0">
            <SectionsLinks />
          </Box>

          <Flex direction="column">
            <Box as="article" my={4} width="100%">
              <Box m="0" as="section" color="white">
                {children}
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" bottom={0}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
export default Layout;
