import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <Container maxW="400px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading size="lg" mb="20px">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="15px">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Digite seu email" />
        </FormControl>
        <FormControl isRequired mb="20px">
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="Digite sua senha" />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">Entrar</Button>
        <Text mt="15px">
          Não possui conta? <Link as={RouterLink} to="/registrar" color="blue.500">Registrar</Link>
        </Text>
      </form>
    </Container>
  );
}
