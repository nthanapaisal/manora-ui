import React from 'react';
import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function ResetPassword() {
  const navigate = useNavigate(); 
  const handleResetPassword = () => {
    // Logic to handle password reset (e.g., API call) can go here

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <Container marginTop="30px" maxW="1500px" centerContent>
      <Box bg="blue.400" h="500px" w="300px" borderRadius="10px" p={10}>
        <Heading color="white" fontSize="2xl" textAlign="center">
          Enter One-time Code to Reset Password
        </Heading>
        <Input 
          placeholder="One Time Code" 
          type="text" 
          marginTop="20px" 
          bg="white" 
          borderRadius="5px"
        />
        <Input 
          placeholder="New Password" 
          type="password" 
          marginTop="20px" 
          bg="white" 
          borderRadius="5px"
        />
        <Input 
          placeholder="Confirm Password" 
          type="password" 
          marginTop="20px" 
          bg="white" 
          borderRadius="5px"
        />
        <Button 
          w="50%" 
          marginTop="30px" 
          bg="white" 
          color="blue.400" 
          width="full"
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

