import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, SimpleGrid, Text, Container } from "@chakra-ui/react";



export default function PostListItem({title, date}) {
return (
    <SimpleGrid spacing={10} minChildWidth="250px" mb={8}>

    <Container border="2px" borderColor="gray.400" bg="white">
        <Text as="h4" size="sm" fontWeight="400" my={2}>
            {title}
        </Text>
        <Flex as="span" align="center" fontSize="sm" color="gray.600">
        <CalendarIcon p="6"/>
        <Text color="gray.900" ml={1}>
        {date}
        </Text>
        </Flex>


    </Container>
    </SimpleGrid>
)
}
