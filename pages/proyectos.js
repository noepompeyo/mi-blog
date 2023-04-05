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

          <Box border="2px solid" maxW="300px" ml={3} borderRadius={32} display="flex" flexDirection="column" boxShadow="2xl">
            <Link href={projectsData.href}>
              <Image alt={projectsData.title} src="/assets/reck.jpg" objectFit="cover" borderRadius="30px 30px 0 0" />
            </Link>

            <Link href={projectsData.href}>
              <Text as="h1" fontSize={22} mb={2} textAlign="center" fontFamily="monospace">
                {projectsData.title}
              </Text>
            </Link>
            <Text fontFamily="monospace" mb={2} textAlign="left" ml={3}>
              {projectsData.description}
            </Text>
            <Link href={projectsData.href}>
              <Text textAlign="center" mb={2} fontWeight="bold" fontSize="1.2em" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                Learn more &rarr;
              </Text>
            </Link>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
