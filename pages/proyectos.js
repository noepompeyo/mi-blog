import Footer from "@/components/Footer";

import SectionsLinks from "@/components/SectionsLinks";
import { Box, ChakraProvider, Heading, Text, Image } from "@chakra-ui/react";
import projectsData from "@/components/projectsData";
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
          borderTop="10px solid"
          borderColor="orange.300"
        >
          <Box maxW="768px" m="auto">
            <SectionsLinks />
            <Heading ml={4} mb={16}>
              Projects
            </Heading>

            <Box border="2px solid" color="white" maxW="380px" pl={4} h='auto'>
              <Link href={projectsData.href}>
                <Image
                  alt={projectsData.title}
                  src="/assets/google.png"
                  objectFit="cover"
                />
              </Link>

              <Link href={projectsData.href}>
                <Text as="h1" fontSize={22} mb={2}>
                  {projectsData.title}
                </Text>
              </Link>
              <Text mb={2}>{projectsData.description}</Text>
              <Link href={projectsData.href}>
                <Text color="blue.200" mb={2}>
                  Learn more &rarr;
                </Text>
              </Link>
            </Box>
          </Box>

          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
