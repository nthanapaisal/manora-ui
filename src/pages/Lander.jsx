
import React from "react"
import { Box, Grid, Container, HStack, Link, Image, Text, Flex, Table, Thead, Tbody, Tr, Th, Td, Button} from "@chakra-ui/react"
import { useFetchSongs } from '../apicallers/Top100api';
import { SimpleGrid } from "@chakra-ui/react";
import Userbox from "../components/Userbox";

export default function Lander() {
  const { songs, loading, error } = useFetchSongs(10);

  if (loading) {
      return <p>Loading...</p>;
  }

  if (error) {
      return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <Flex>
    <Container marginTop="30px" maxWidth="1500px" centerContent>
    <Grid>
      <HStack>
        <Userbox/>
        <Box bg="blue.400" h="700px" w="1000px" borderRadius="10px">
          <SimpleGrid p="10px" spacing={1} minChildWidth="100px" marginTop="30px" marginLeft="20px" marginRight="20px">
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px" ></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px" ></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
              <Box bg="white" h="100px" w="100px" borderRadius="10px"></Box>
          </SimpleGrid>
        </Box>
        
        <Box bg="blue.400" w="250px" borderRadius="10px" overflow="hidden">
          <Text marginLeft={5} marginTop={3} marginBottom={2} color="white" fontSize="20px" maxWidth="180px">Top 10 Songs</Text>
          <Flex>
          <Container maxWidth="100%" marginBottom="30px">
            <Table size='sm' color="white">
              <Thead>
                <Tr>
                  <Th color="white">Names</Th>
                  <Th color="white">Artists</Th>
                </Tr>
              </Thead>
              <Tbody>
                {songs.map((song, index) => (
                  <Tr key={index}>
                    <Td>{song[0]}</Td>
                    <Td>{song[1]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
          </Flex>
        </Box>
      </HStack>
    </Grid>
    </Container>
    </Flex>
  )
}
