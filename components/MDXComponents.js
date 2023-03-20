import { Box, Heading, Text } from '@chakra-ui/react';

const MDXComponents = {
  h1: (props) => <Heading as="h1" my={8} size="lg" {...props} />,
  h2: (props) => <Heading as="h2" my={4} size="lg" {...props} />,
  h3: (props) => <Heading as="h3" my={4} size="md" {...props} />,
  h4: (props) => <Heading as="h4" my={2} size="md" {...props} />,
  h5: (props) => <Heading as="h5" my={2} size="sm" {...props} />,
  h6: (props) => <Heading as="h6" my={2} size="sm" {...props} />,
  p: (props) => <Text fontSize="md" lineHeight={6} my={8} {...props} />,
  br: (props) => <Box height="24px" {...props} />,
};

export default MDXComponents;
