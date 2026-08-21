import { useEffect, useState } from 'react';
import { Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://projeto-node-step-t5i1.vercel.app/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading>Home</Heading>
      <Text mt="10px">Produtos:</Text>

      <UnorderedList mt="10px">
        {produtos.map((produto) => (
          <ListItem key={produto._id}>{produto.nome}</ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
}
