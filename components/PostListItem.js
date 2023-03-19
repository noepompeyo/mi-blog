import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function PostListItem({ title, date }) {
  return (
    <Box as="span" display="block" py="2" ml={4}>
      <Text as="h4" size="sm" fontWeight="400" my={2}>
        {title}
      </Text>
      <Flex as="span" align="center" fontSize="sm" color="white">
        <CalendarIcon />
        <Text color="orange.300" ml={2}>
          {date}
        </Text>
      </Flex>
    </Box>
  );
}
