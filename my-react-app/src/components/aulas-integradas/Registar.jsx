import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormLabel, Heading, Input, Link, Select, Text } from '@chakra-ui/react';

export default function Registar() {
  const navigate = useNavigate();
  const [dados, setDados] = useState({ nome: '', email: '', senha: '', role: '' });
  const [erro, setErro] = useState('');

  function handleChange(event) {
    setDados({ ...dados, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro('');

    try {
      const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Não foi possivel registrar!');
      }

      navigate('/login');
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <Container maxW="400px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading size="lg" mb="20px">Registrar</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="15px">
          <FormLabel>Nome</FormLabel>
          <Input name="nome" value={dados.nome} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="15px">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={dados.email} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="15px">
          <FormLabel>Senha</FormLabel>
          <Input name="senha" type="password" value={dados.senha} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="20px">
          <FormLabel>Tipo de usuário</FormLabel>
          <Select name="role" value={dados.role} onChange={handleChange} placeholder="Escolha uma opção">
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </Select>
        </FormControl>
        {erro && <Text color="red.500" mb="15px">{erro}</Text>}
        <Button type="submit" colorScheme="blue" width="100%">Registrar</Button>
        <Text mt="15px">
          Já possui conta? <Link as={RouterLink} to="/login" color="blue.500">Entrar</Link>
        </Text>
      </form>
    </Container>
  );
}
