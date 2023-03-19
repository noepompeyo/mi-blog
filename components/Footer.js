import { Box, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box 
    maxW="1440px"
    bg="gray.900" 
    color="white" 
    position="relative"
    overflow="visible" 
    zIndex="2"

    >
      <Flex 
      
      py={12}
      w="100vw" 
      direction="column" 
      justify="space-between" 
      textAlign="center"
      align="center" 
      fontFamily="mono" 
      fontSize="sm">
        &copy; {new Date().getFullYear()} Noe Pompeyo | Made Witch 💻 in ES
      </Flex>
    </Box>
  );
}
