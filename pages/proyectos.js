import { Box,  Heading, Text, Image } from '@chakra-ui/react';
import projectsData from '@/components/projectsData';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function Proyectos() {
  return (
    <>
    <Layout>
    <Heading ml={4} mb={16}>
              Projects
            </Heading>

            <Box border="2px solid" color="white" maxW="300px" pl={4} m="auto" borderRadius={32}>
              <Link href={projectsData.href}>
                <Image alt={projectsData.title} src="/assets/google.png" objectFit="cover" />
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
    </Layout>
  
    
    </>
  )
  }

