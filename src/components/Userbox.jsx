import React from 'react'
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Divider, Heading, Stack } from "@chakra-ui/react";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { BsMusicNoteList, BsStars, BsPersonHeart  } from "react-icons/bs";


export default function Userbox() {

  return (
    

    <Box bg="blue.400" w="250px" borderRadius="10px" align="center" justify="center">
        <Card maxW='sm' bg="blue.400" borderRadius="10px">
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    w="250px"
                    h="150px"
                    borderRadius="10px"
                />
                <Stack mt='3' spacing='2'> {/* Reduced the mt value from 50 to 3 */}
                    <Heading size='md'>
                        <Text align="left" marginLeft="-10px" color="white" fontWeight="12px" maxWidth="180px">
                            Monora
                        </Text>
                    </Heading>
                    <Text align="left" marginLeft="10px" fontSize="13px" color="white" maxWidth="180px">
                        I love AI music! They are new and fresh! Check out my music.
                    </Text>


                    <Grid templateColumns="repeat(3, 50px)" marginTop="4" justifyContent="center" gap={3}>
                        <GridItem textAlign="center">
                            <Icon as={BsPersonHeart} boxSize="6" color="white" />
                            <Text fontSize="12px" color="white">Followers</Text>
                        </GridItem>
                        <GridItem textAlign="center">
                            <Icon as={BsMusicNoteList } boxSize="6" color="white" />
                            <Text fontSize="12px" color="white">Releases</Text>
                        </GridItem>
                        <GridItem textAlign="center">
                            <Icon as={BsStars} boxSize="6" color="white" />
                            <Text fontSize="12px" color="white">Rank</Text>
                        </GridItem>
                    </Grid>

                </Stack>
            </CardBody>
            <Divider color="white"/>
            <CardFooter>
                <Button variant="solid" color="blue.400" bg="white">
                    Settings
                </Button>
            </CardFooter>
        </Card>
    </Box>



    //     <Link to="/">
    //         <Image
    //             src="https://via.placeholder.com/150x150"
    //             alt="Placeholder image"
    //             marginRight={3}
    //             marginTop={5}
    //             borderWidth="1px"
    //             onClick={() => setActiveIndex(0)}
    //             borderRadius="10px"
    //         />
    //     </Link>
    //     <Text marginTop={4} align="left" marginLeft="10px" color="white" fontWeight="12px" maxWidth="180px">
    //         Monora T
    //     </Text>
    //     <Text align="left" marginLeft="10px" fontSize="13px" color="white" maxWidth="180px">
    //         I love AI music! They are new and fresh! Check out my music.
    //     </Text>
    //     <Button color="blue.400" fontWeight="normal" fontSize="12px" marginTop="10px" marginLeft="10px" marginRight="10px" borderRadius="10px" h="20px" w="120px">
    //         Settings
    //     </Button>
        
    // </Box>
  )
}
