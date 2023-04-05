import Layout from '@/components/layout';
import { Grid, Heading, Box } from '@chakra-ui/react';
import { formatDate } from '@/lib/format-date';
import Link from 'next/link';
import { getAllFilesMetadata } from '@/lib/mdx';
import PostListItem from '@/components/PostListItem';

export default function SobreMi({ posts }) {
  return (
    <>
      <Layout>
        <Box width={['300px', '736px']}>
          <Heading align="left" fontFamily="mono" fontSize="xl" ml={4}>
            Últimas publicaciones
          </Heading>
          <Grid>
            {posts?.map((post) => (
              <Link href={`/${post.slug}`} key={post.slug}>
                <PostListItem title={post.title} date={formatDate(post.date)} tags={post.tags} />
              </Link>
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('posts');

  return {
    props: { posts },
  };
}
