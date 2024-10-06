import React, { useState } from 'react'; // Import useState
import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Validate() {
  const navigate = useNavigate(); // Initialize useNavigate

  // State to hold the input values
  const [email, setEmail] = useState('');
  const [oneTimeCode, setOneTimeCode] = useState('');

  const handleValidation = () => {
    // Logic to handle password reset (e.g., API call) can go here

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <Container marginTop="30px" maxW="1500px" centerContent>
      <Box bg="blue.400" h="400px" w="300px" borderRadius="10px" p={10}>
        <Heading color="white" fontSize="2xl" textAlign="center">
          Validate Account
        </Heading>
        <Input 
          placeholder="Email" 
          type="email" 
          marginTop="20px" 
          bg="white" 
          borderRadius="5px"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
        <Input 
          placeholder="One Time Code" 
          type="text" 
          marginTop="20px" 
          bg="white" 
          borderRadius="5px"
          value={oneTimeCode} // Controlled input
          onChange={(e) => setOneTimeCode(e.target.value)} // Update state on change
        />
        <Button 
          w="50%" 
          marginTop="30px" 
          bg="white" 
          color="blue.400" 
          width="full"
          onClick={handleValidation} // Add onClick handler
        >
          Validate Account
        </Button>
      </Box>
    </Container>
  );
};
