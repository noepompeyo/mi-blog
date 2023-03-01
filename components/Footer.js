import { Container, Flex } from "@chakra-ui/react";


export default function Footer() {
  return (
    <Container 
    maxW="container.2xl" 
    bg="gray.900"
    color="white"
    position="relative"
    overflow="visible"
    zIndex="2"
    >
        <Flex
        py={16}
        w="100%"
        direction="row"
        justify="center           "
        textAlign="center"
        align="center"
        fontFamily="mono"
        fontSize="sm"
        
        >
            &copy;  {new Date().getFullYear()}  Noe Pompeyo | Made Witch 💻 in ES

        </Flex>
    </Container>
  )
}
