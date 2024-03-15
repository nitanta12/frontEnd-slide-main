import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebase.js'; // Import your Firebase configuration

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authenticate = getAuth(auth); // Get Firebase Authentication instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(authenticate, email, password);
      // User successfully created, handle success (e.g., redirect)
      console.log('User created:', userCredential.user);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle errors (e.g., display error message)
    }
  };

  return (
    <Box w="full" h="100vh" bg="White" p={8} display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading>Sign Up</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="yourname@example.com"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" my-5 py-2>
            Sign Up
          </Button>
        </form>
        <HStack justifyContent="center">
          <Text>Already have an account?</Text>
          <Text as="a" href="/signin">
            Login
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Signup;