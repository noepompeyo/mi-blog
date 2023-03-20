import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import Layout from '../components/layout';
import MDXComponents from '../components/MDXComponents';

export default function Post({ source }) {
  console.log(source);
  return (
    <Layout>
      <MDXRemote {...source} components={MDXComponents} />
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
