import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import remarkGfm from 'remark-gfm';

// se cacheo la ruta raiz
const root = process.cwd();

// devuelve todos los ficheros, lods lee de manera sincrona con el fs . readdirsync

export const getFiles = () => fs.readdirSync(path.join(root, '/data/posts'));

//funcion complementaria ara leer un solo fichero que se ael que se pasa por parametro

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(path.join(root, '/data/posts', `${slug}.mdx`), 'utf-8');

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles'), remarkGfm],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};
// nos devuelve la metadata de los ficheros
export const getAllFilesMetadata = () => {
  const files = getFiles();

  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, '/data/posts', postSlug), 'utf-8');
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost];
  }, []);
};
