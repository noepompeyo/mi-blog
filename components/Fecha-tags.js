import { Tag, Text, TagLabel, Avatar, Stack } from '@chakra-ui/react';
import React from 'react';
import { CalendarIcon } from '@chakra-ui/icons';

export default function Fecha({ date, tag }) {
  return (
    <Stack spacing={['8px', '24px']} justifyContent="center" direction={['column', 'row']}>
      <Text>
        <CalendarIcon color="#9ca3af" mb="2px" mr="6px" />
        {date}
      </Text>
      <Tag width={['40%', '15%']}>{tag}</Tag>
      <Tag size="lg" borderRadius="full" width={['40%', '22%']}>
        <Avatar src="/assets/noe-pompeyo.png" size="xs" name="Noe" ml={-1} mr={2} />
        <TagLabel>Noe Pompeyo</TagLabel>
      </Tag>
    </Stack>
  );
}
