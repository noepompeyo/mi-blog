import Footer from "@/components/Footer";
import SocialNetworks from "@/components/SocialNetworks";
import SectionsLinks from "@/components/SectionsLinks";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  Image,
  Center,
  Flex
} from "@chakra-ui/react";

export default function SobreMi() {
  return (
    <>
      <ChakraProvider>
        <Box    
        
          w="100vw"
          bg="gray.900"
          color="white"
          h="100vh"
          borderTop='10px solid'
          borderColor='orange.300'
        >
           <Box 
        maxW="736px"
        
        m="auto"
      
        >

        
        <SectionsLinks
/>

       

        
          <Heading textAlign='center'
         
         >About</Heading>
          
         <Flex
         direction='row'
         justify='center'
         align='center'
         >


           <Image
             borderRadius="full"
             objectFit="cover"
             boxSize="110px"
            
             mt={4}
             mb={4}
             src="/assets/noe_pompeyo.jpg"
             alt="Noe Pompeyo"
           />
         </Flex>
           <Text align='center'>Noe Pompeyo Martinez</Text>
           <Text align='center'>Frontend Developer </Text>
           <Flex
         direction='row'
         justify='center'
         align='center'
         >

           <SocialNetworks />
         </Flex>
           
           
         


         
         <Container>
           <Text as='h2' fontSize={18} mb={2}>¿Quién es Noe Pompeyo?</Text>
           <Text as='h3' fontSize={14} ml={2}  mb={2}>
             Mexicano, originario de Veracruz, actualmente viviendo en
             Guadalajara, mi principal reto es ser frontend developer.
           </Text>

           <Text as='h2' fontSize={18} mb={2} >Especialidades</Text>
           <Text as='h3' fontSize={14} ml={2}  mb={2}>
             Soy un apasionado por las tecnologías Web, estoy apendiendo
             programación con JavaScript JavaScript, React, NextJS, Node,
             GitHub.
           </Text>
         </Container>
         </Box>
         
          
            <Footer />
            
         
            
        </Box>
      </ChakraProvider>
    </>
  );
}
