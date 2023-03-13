import { Container, Flex } from "@chakra-ui/react";


export default function Footer() {
  return (
    <Container 
    w='100vw' 
    bg="gray.900"
    color="white"
    
    overflow="visible"
    zIndex="2"
    >
        <Flex
        py={14}
        w="100%"
        direction="row"
        justify="center"           
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
