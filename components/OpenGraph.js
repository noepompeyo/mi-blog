// import Head from "next/head";

// export const OpenGraph = ({ metadata = {} }) => {
//   const SEO = {
//     title:
//       metadata.title ||
//       'Aprende sobre desarrollo frontend , Javascript, HTML, CSS, React, y Chakra UI',
//     description:
//       metadata.description ||
//       "Aprende como se hace!!",
//     slug: metadata.slug || "",
//     image: `../public/assets/noe-pompeyo.png${metadata.title}`,
//     date: metadata.date || new Date().toISOString(),
//   };

//   return (
//     <Head>
//       <title>{SEO.title}</title>
//       <meta name="robots" content="follow, index" />
//       <meta content={SEO.description} name="description"/>
//       <meta property="og:url" content={`https://noepm.vercel.app/${SEO.slug}`}/>
//       <link rel="canonical" href={`https://noepm.vercel.app/${SEO.slug}`} />
//       <meta property="og:type" content="website" />
//       <meta property="og:site_name" content="Noe Pompeyo" />
//       <meta property="og:description" content={SEO.description} />
//       <meta property="og:title" content={SEO.title} />
//       <meta property="og:image" content={SEO.image} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:site" content="@NoePompeyo" />
//       <meta name="twitter:title" content={SEO.title} />
//       <meta name="twitter:description" content={SEO.description} />
//       <meta name="twitter:image" content={SEO.image} />
//       <meta property="article:published_time" content={SEO.date} />
//     </Head>
//   );
// };
