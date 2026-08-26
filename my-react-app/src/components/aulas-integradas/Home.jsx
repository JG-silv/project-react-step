import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState('');

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  async function buscarProdutos() {
    try {
      const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/produtos');
      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Não foi possível carregar os produtos.');
      }

      setProdutos(Array.isArray(resultado) ? resultado : resultado.produtos || []);
    } catch (error) {
      setErro(error.message);
    }
  }

  async function handleDelete(id) {
    const confirmou = window.confirm('Deseja realmente deletar este produto?');

    if (!confirmou) return;

    try {
      const token = localStorage.getItem('token');
      const resposta = await fetch(`https://projeto-node-step-t5i1.vercel.app/produtos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Não foi possível deletar o produto.');
      }

      buscarProdutos();
    } catch (error) {
      setErro(error.message);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <Container maxW="700px" mt="50px" p="20px" borderWidth="1px" borderRadius="8px">
      <Heading size="lg" mb="20px">Produtos</Heading>

      <Button onClick={handleLogout} mr="10px">
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span style={{ marginLeft: '8px' }}>Sair</span>
      </Button>
      <Button as={RouterLink} to="/produtos/criar" colorScheme="blue">
        <FontAwesomeIcon icon={faPlus} />
        <span style={{ marginLeft: '8px' }}>Criar produto</span>
      </Button>

      <Text mt="25px" fontWeight="bold">Produtos cadastrados</Text>
      {erro && <Text color="red.500" mt="15px">{erro}</Text>}

      {produtos.length === 0 && !erro && (
        <Text mt="10px">Nenhum produto cadastrado.</Text>
      )}

      <UnorderedList mt="10px">
        {produtos.map((produto) => {
          const id = produto._id || produto.id;

          return (
            <ListItem key={id} mb="15px">
              {produto.nome} - R$ {Number(produto.preco).toFixed(2)}
              <br />
              <Button as={RouterLink} to={`/produto/${id}`} size="sm" mt="5px" mr="5px">
                Editar
              </Button>
              <Button onClick={() => handleDelete(id)} size="sm" colorScheme="red" mt="5px">
                Deletar
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Container>
  );
}
