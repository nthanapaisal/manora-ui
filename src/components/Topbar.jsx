import { Flex, HStack, Spacer, Image, Tabs, TabList, Tab, TabPanels, TabPanel, InputGroup, InputLeftElement, Input, Button, TabIndicator } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import React, { useState  } from 'react';
import { BsFire, BsArrowThroughHeartFill , BsBarChartFill, BsEarbuds, BsDoorClosedFill } from "react-icons/bs";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'


export default function Topbar() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Flex  bg="blue.400" color="white">
        <HStack marginLeft={5}>
            <Link to="/"> {/* Wrap the Image with the Link component */}
                <Image
                    src="https://via.placeholder.com/100x50"
                    alt="Placeholder image"
                    marginRight={3}
                    borderWidth="1px"
                    onClick={() => setActiveIndex(0)}
                />
            </Link>
            <Tabs position='relative' variant='unstyled' fontWeight="normal">
                <TabList>
                    <Tab as={Link} to="/popular" onClick={() => setActiveIndex(1)}>
                        <BsFire /> Popular
                    </Tab>
                    <Tab as={Link} to="/top100" onClick={() => setActiveIndex(2)}>
                        <BsArrowThroughHeartFill /> Top100
                    </Tab>
                    <Tab as={Link} to="/dashboard" onClick={() => setActiveIndex(3)}>
                        <BsBarChartFill /> Dashboard
                    </Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='white' display={activeIndex > 0 ? "block" : "none"}/>
            </Tabs>
        </HStack>
        <Spacer/>
        <HStack marginRight={5}>
            <StatGroup>
                <Stat>
                    <Flex direction="column" alignItems="flex-end">
                    <StatLabel fontWeight="normal" fontSize="13px" marginBottom="-3px" >ManoraUsers</StatLabel>
                    <HStack marginRight="0px" flexWrap="nowrap">
                        <StatNumber fontWeight="normal" fontSize="12px" isTruncated>
                        543
                        </StatNumber>
                        <BsEarbuds />
                    </HStack>
                    </Flex>
                </Stat>
            </StatGroup>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="white" />
                </InputLeftElement>
                <Input
                    type="search"
                    placeholder="Search.."
                    color="white" 
                    bg="transparent"
                    _placeholder={{ color: 'white' }}
                />
            </InputGroup>
            {isLoggedIn ? (
                <Button onClick={() => setIsLoggedIn(false)} as={Link} to="/login" fontWeight="normal" colorScheme="white">Logout</Button>
            ) : (
                <Button onClick={() => setIsLoggedIn(true)} as={Link} to="/login" fontWeight="normal" colorScheme="white">Login</Button>
            )}
        </HStack>
    </Flex>
  )
}
