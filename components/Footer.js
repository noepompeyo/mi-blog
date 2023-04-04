import { Box, Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box position="relative" overflow="visible" zIndex="2">
      <Flex w="100vw" direction="column" justify="space-between" textAlign="center" align="center" fontFamily="mono" fontSize="sm">
        &copy; {new Date().getFullYear()} Noe Pompeyo | Made Witch 💻 in ES
      </Flex>
    </Box>
  );
};
