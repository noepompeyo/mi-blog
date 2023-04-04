import { Box, Heading, Text, Image } from '@chakra-ui/react';
import projectsData from '@/components/projectsData';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function Proyectos() {
  return (
    <>
      <Layout>
        <Box width={['300px', '736px']}>
          <Heading mt={2} mb={16} textAlign="left">
            Projects
          </Heading>

          <Box border="2px solid" maxW="300px" pl={4} ml={3} borderRadius={32}>
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
              <Text mb={2}>Learn more &rarr;</Text>
            </Link>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
