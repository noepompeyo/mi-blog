import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex, Tag, Text } from '@chakra-ui/react';

export default function PostListItem({ title, date, tags }) {
  return (
    <Box as="span" display="block" py="2" ml={4}>
      <Text as="h4" size="sm" fontWeight="400" my={2}>
        {title}
      </Text>
      <Flex as="span" align="center" fontSize="sm" color="white">
        <CalendarIcon color="#9ca3af" />
        <Text color="orange.300" ml={2}>
          {date}
          {tags?.map((tag) => (
            <Tag key={tag} size="md" mx={2} colorScheme="orange.300" color="white">
              {tag}
            </Tag>
          ))}
        </Text>
      </Flex>
    </Box>
  );
}
