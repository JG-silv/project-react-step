import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormLabel, Heading, Input, Link, Text, Textarea } from '@chakra-ui/react';

export default function CriarProduto() {
  const navigate = useNavigate();
  const [dados, setDados] = useState({ nome: '', descricao: '', preco: '', categoria: '', estoque: '' });
  const [erro, setErro] = useState('');

  function handleChange(event) {
    setDados({ ...dados, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro('');

    try {
      const token = localStorage.getItem('token');

      const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nome: dados.nome,
          descricao: dados.descricao,
          preco: Number(dados.preco),
          categoria: dados.categoria,
          estoque: Number(dados.estoque),
        }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Não foi possível criar o produto.');
      }

      navigate('/home');
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <Container maxW="500px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading size="lg" mb="20px">Criar produto</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="15px">
          <FormLabel>Nome</FormLabel>
          <Input name="nome" value={dados.nome} onChange={handleChange} />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel>Descrição</FormLabel>
          <Textarea name="descricao" value={dados.descricao} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="15px">
          <FormLabel>Preço</FormLabel>
          <Input name="preco" type="number" value={dados.preco} onChange={handleChange} />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel>Categoria</FormLabel>
          <Input name="categoria" value={dados.categoria} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="20px">
          <FormLabel>Estoque</FormLabel>
          <Input name="estoque" type="number" value={dados.estoque} onChange={handleChange} />
        </FormControl>
        {erro && <Text color="red.500" mb="15px">{erro}</Text>}
        <Button type="submit" colorScheme="blue" width="100%">Criar produto</Button>
        <Text mt="15px">
          <Link as={RouterLink} to="/home" color="blue.500">Voltar para a Home</Link>
        </Text>
      </form>
    </Container>
  );
}
