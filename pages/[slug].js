import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import Layout from '../components/layout';
import MDXComponents from '../components/MDXComponents';
import { Box } from '@chakra-ui/react';
import Fecha from '../components/Fecha-tags';

export default function Post({ source }) {
  return (
    <Layout>
      <Box width={['300px', '736px']}>
        <MDXRemote {...source} components={{ MDXComponents, Fecha }} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
  };
}
