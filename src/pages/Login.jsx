import { Container, Box, Grid, GridItem, Image, Text, Input, Button, VStack, Heading, useToast, Divider } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//import { authLogin, createAccount, resetPassword } from './api/Authapi';

export default function Login() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const success = true; //await authLogin(signInEmail, signInPassword);
    if (success) {
      navigate('/');
    } else {
      toast({
        title: "Error",
        description: "Incorrect email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCreateAccount = async () => {
    const success = true; //await createAccount(createEmail, createPassword, confirmPassword); 
    if (success) {
      navigate('/validate');
    } else {
      toast({
        title: "Error",
        description: "There was an issue with creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleResetPassword = async () => {
    const success = true; //await resetPassword(resetEmail);
    if (success) {
      navigate('/resetpassword');
    } else {
      toast({
        title: "Error",
        description: "Email does not exist.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container marginTop="30px" maxW="1500px" centerContent>
      <Box bg="blue.400" h="600px" w="1000px" borderRadius="10px" p={10}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} h="100%">
          <GridItem>
            <VStack spacing={5} align="center">
              <Image
                src="https://via.placeholder.com/100x100"
                alt="Placeholder logo"
                borderWidth="1px"
                borderRadius= "10px"
              />
              <Heading color="white" fontSize="2xl" textAlign="center">Welcome to Manora</Heading>
              <Text color="white" fontSize="md" textAlign="center">Please sign in to your account</Text>
              <Input 
                placeholder="Email" 
                type="email" 
                bg="white" 
                w="50%" 
                value={signInEmail} 
                onChange={(e) => setSignInEmail(e.target.value)} 
              />
              <Input 
                placeholder="Password" 
                type="password" 
                bg="white" 
                w="50%" 
                value={signInPassword} 
                onChange={(e) => setSignInPassword(e.target.value)} 
              />
              <Button 
                w="50%" 
                colorScheme="whiteAlpha" 
                bg="white" 
                color="blue.400"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack spacing={5} justify="start" h="100%">
              <Heading color="white" fontSize="2xl" textAlign="center">Create Account</Heading>
              <Input 
                placeholder="Email" 
                type="email" 
                bg="white" 
                w="50%" 
                value={createEmail} 
                onChange={(e) => setCreateEmail(e.target.value)} 
              />
              <Input 
                placeholder="Password" 
                type="password" 
                bg="white" 
                w="50%" 
                value={createPassword} 
                onChange={(e) => setCreatePassword(e.target.value)} 
              />
              <Input 
                placeholder="Confirm Password" 
                type="password" 
                bg="white" 
                w="50%" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
              <Button 
                w="50%" 
                colorScheme="whiteAlpha" 
                bg="white" 
                color="blue.400"
                onClick={handleCreateAccount}
              >
                Create Account
              </Button>
              <Divider color="white"/>
              <Heading color="white" fontSize="2xl" textAlign="center" marginTop={2}>Reset Password</Heading>
              <Input 
                placeholder="Email" 
                type="email" 
                bg="white" 
                w="50%" 
                value={resetEmail} 
                onChange={(e) => setResetEmail(e.target.value)} 
              />
              <Button 
                w="50%" 
                colorScheme="whiteAlpha" 
                bg="white" 
                color="blue.400"
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
