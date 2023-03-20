import Layout from '@/components/layout';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import { formatDate } from '@/lib/format-date';
import Link from 'next/link';
import { getAllFilesMetadata } from '@/lib/mdx';
import PostListItem from '@/components/PostListItem';

export default function SobreMi({ posts }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Box m="auto">
            <Text align="left" fontFamily="mono" fontWeight="600" as="h3" fontSize="xl" ml={4}>
              Últimas publicaciones
            </Text>

            {posts?.map((post) => (
              <Link href={`/${post.slug}`} key={post.slug}>
                <PostListItem title={post.title} date={formatDate(post.date)} tags={post.tags} />
              </Link>
            ))}
            <Box ml={4}></Box>
          </Box>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('posts');

  return {
    props: { posts },
  };
}
