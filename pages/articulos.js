import Footer from "@/components/Footer";

import SectionsLinks from "@/components/SectionsLinks";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  Image,
  Center,
  Flex,
  Card
} from "@chakra-ui/react";
import Link from "next/link";

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
        <SectionsLinks/>
        <Heading ml={4}
        mb={16}
      
        >Articulos</Heading>

        <Heading>Aqui deberian ir mis articulos </Heading>


       
       
    
          
            <Footer />
            
      </Box>
            
        </Box>
      </ChakraProvider>
    </>
  );
}
