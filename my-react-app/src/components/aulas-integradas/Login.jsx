import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';

export default function Login() {
  const navigate = useNavigate();
  const [dados, setDados] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState('');

  function handleChange(event) {
    setDados({ ...dados, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro('');

    try {
      const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'E-mail ou senha inválidos.');
      }

      if (!resultado.token) {
        throw new Error('A API não retornou o token de login.');
      }

      localStorage.setItem('token', resultado.token);
      navigate('/home');
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <Container maxW="400px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading size="lg" mb="20px">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="15px">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={dados.email} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="20px">
          <FormLabel>Senha</FormLabel>
          <Input name="senha" type="password" value={dados.senha} onChange={handleChange} />
        </FormControl>
        {erro && <Text color="red.500" mb="15px">{erro}</Text>}
        <Button type="submit" colorScheme="blue" width="100%">Entrar</Button>
        <Text mt="15px">
          Não possui conta? <Link as={RouterLink} to="/registrar" color="blue.500">Registrar</Link>
        </Text>
      </form>
    </Container>
  );
}
