import Head from 'next/head';
import { Text, ChakraProvider, Flex, Heading, Box, Image } from '@chakra-ui/react';
import { formatDate } from '@/lib/format-date';
import Link from 'next/link';
import { getAllFilesMetadata } from '@/lib/mdx';
import PostListItem from '@/components/PostListItem';
import { SectionsLinks } from '@/components/SectionsLinks';
import SocialNetworks from '@/components/SocialNetworks';
import { Footer } from '@/components/Footer';

export default function Home({ posts }) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>noepm</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/astronaut-helmet-svgrepo-com.svg" />
        </Head>

        <Box w="100vw" borderTop="10px solid" borderColor="orange.300" display="flex">
          <Box w="736px" m="auto">
            <SectionsLinks />

            <Flex direction={['column', 'row']} justify="space-between" align="left">
              <Box width={['100%', '75%']} order={[2, 1]}>
                <Heading fontFamily="mono" as="h1" size="xl" pl={4} pb={4} textAlign="left" mt={[2, 8]}>
                  Noe Pompeyo
                </Heading>
                <Text fontSize="md" lineHeight={1.75} mt={[4, 0]} m={4}>
                  Soy Front End developer aprendiendo las tecnologias para contruir en la web, me gusta la tecnologia y la ciencia.
                </Text>
                <Text ml={4}>#React &emsp; #ChakraUI &emsp; #Javascript</Text>
              </Box>
              <Box width={['25%', '18%']} order={[1, 2]} alignSelf={['start', 'center']} mr={8}>
                <Image borderRadius="full" objectFit="cover" boxSize="110px" ml={4} src="/assets/noe-pompeyo.png" alt="Noe Pompeyo" />
              </Box>
            </Flex>
            <Box ml={4}>
              <SocialNetworks />
            </Box>

            <Flex direction={['column', 'column', 'row']}>
              <Box w={['100%', '100', '75%']} mb="25px">
                <Text align="left" fontFamily="mono" fontWeight="600" as="h3" fontSize="xl" ml={4}>
                  Últimas publicaciones
                </Text>
                {posts.map((post) => (
                  <Link href={`/${post.slug}`} key={post.slug}>
                    <PostListItem title={post.title} date={formatDate(post.date)} tags={post.tags} />
                  </Link>
                ))}
                <Box ml={4}>
                  <Link href="/articulos" pt={8}>
                    Ver todas{' '}
                  </Link>
                </Box>
              </Box>
            </Flex>
            <Box display="grid" placeContent="center" mt={['0', '150px']}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
