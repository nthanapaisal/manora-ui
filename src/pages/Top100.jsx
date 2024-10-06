import { useFetchSongs } from '../apicallers/Top100api';
import { Container, Flex } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Box, Text } from '@chakra-ui/react';

export default function Top100() {
    const { songs, loading, error } = useFetchSongs(100);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <Flex>
        <Container marginTop="30px" maxWidth="1000px" marginBottom="30px">
            <Text fontWeight="medium" align="center" justify="center" color="blue.400">Top 100 AI Generated Songs</Text>
            <Box bg="blue.400" w="1000px" borderRadius="10px">
                <TableContainer>
                    <Table variant="simple" color="white">
                        <TableCaption color="white">Top 100 Songs</TableCaption>
                        <Thead>
                        <Tr>
                            <Th color="white">Rank</Th>
                            <Th color="white">Title</Th>
                            <Th color="white">Artist</Th>
                            <Th isNumeric color="white">Daily Listens</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {songs.map((song, index) => (
                            <Tr key={index}> 
                            <Td>{index + 1}</Td> 
                            <Td>{song[0]}</Td> 
                            <Td>{song[1]}</Td> 
                            <Td isNumeric>{song[2]}</Td> 
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
        </Flex>
    );
}
