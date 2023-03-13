import Head from 'next/head'
import {  Text,  ChakraProvider, Flex, Heading, Box , Image, Center} from '@chakra-ui/react';
import { formatDate } from '@/lib/format-date';
import Link from 'next/link'
import { getAllFilesMetadata } from '@/lib/mdx'
import PostListItem from '@/components/PostListItem';
import SectionsLinks from '@/components/SectionsLinks';
import SocialNetworks from '@/components/SocialNetworks';
import Footer from '@/components/Footer';




export default function Home({posts}) {
  return (
  <>
  <ChakraProvider>

  
      <Head>
        <title>noepm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
      

      w="100vw"
      h='100vh'
      bg="gray.900"
      borderTop="10px solid"
      borderColor="orange.300"
      color="white"
      display="flex"
      
      
      >
        <Box
        w="736px"
        
        
      
        >
        <SectionsLinks/>


<Flex 
direction={["column", "row"]}
justify="space-between"
align="left"
>
  <Box
  width={["100%", "75%"]}
  order={[2,1]}
  >

<Heading 
fontFamily="mono"
as="h1" 
size="xl"
ml={4}
mb={4}
textAlign="left"
> 
Noe Pompeyo.
</Heading>
  <Text 
  fontSize="md"
  lineHeight={1.75}
  mt={[4,0]}
  m={4}
  
  
  >
  Soy Front End developer aprendiendo las tecnologias para contruir en la web,  me gusta  la tecnologia y la ciencia.
  </Text>
  </Box>
  <Box
  width={["25%","18%"]}
  order={[1,2]}
  alignSelf={["start", "center"]}
  mr={8}
  >
    <Image
    
    borderRadius="full"
    objectFit="cover"
    boxSize="110px"
    ml={4}
    src="/assets/noe_pompeyo.jpg"
    alt="Noe Pompeyo"

    />

    

  </Box>
</Flex>
<SocialNetworks/>


<Flex direction={["column", "column", "row"]}>
  <Box>

  <Text
  align="left"
  fontFamily="mono"
  fontWeight="600"
  as="h3"
  fontSize="xl"
  my="4"
  ml={4}
  >
    Últimas publicaciones
  </Text>        
    {posts.map((post) => ( 
    <Link href={`/${post.slug}`} key={post.slug} >
      
    <PostListItem
      title={post.title}
      date= {formatDate(post.date)}
      
    />
    
      </Link>
    ))}  
    <Box ml={4}>
    <Link  href="/articulos" >
      Ver todas 👀 
      </Link>      
      </Box>   
    </Box>
  
    


</Flex>
        <Footer/>
        </Box>

      
      </Box>
    
</ChakraProvider>
  </>
    
  )
}

export async function getStaticProps () {
  const posts = await getAllFilesMetadata();
  // console.log(posts);
  return{
    props: {posts},
  };
}
