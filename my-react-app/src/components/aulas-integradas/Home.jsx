import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Badge, Box, Button, Card, CardBody, CardFooter, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import ProdutoImagem from './ProdutoImagem';

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
    <Container maxW="1100px" py={{ base: '25px', md: '50px' }}>
      <Box className="products-header">
        <Box>
          <Text className="eyebrow">CATÁLOGO</Text>
          <Heading size="lg">Meus produtos</Heading>
          <Text color="gray.500" mt="1">Gerencie seu catálogo de forma rápida e visual.</Text>
        </Box>
        <Box className="products-actions">
          <Button onClick={handleLogout} variant="outline">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span style={{ marginLeft: '8px' }}>Sair</span>
          </Button>
          <Button as={RouterLink} to="/produtos/criar" colorScheme="blue">
            <FontAwesomeIcon icon={faPlus} />
            <span style={{ marginLeft: '8px' }}>Criar produto</span>
          </Button>
        </Box>
      </Box>

      <Text mt="35px" mb="15px" fontWeight="bold">Produtos cadastrados ({produtos.length})</Text>
      {erro && <Text color="red.500" mt="15px">{erro}</Text>}

      {produtos.length === 0 && !erro && (
        <Text mt="10px">Nenhum produto cadastrado.</Text>
      )}

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px" mt="10px">
        {produtos.map((produto) => {
          const id = produto._id || produto.id;

          return (
            <Card key={id} className="product-card" overflow="hidden">
              <ProdutoImagem produto={produto} />
              <CardBody>
                <Box display="flex" justifyContent="space-between" alignItems="center" gap="10px">
                  <Heading size="md" noOfLines={1}>{produto.nome}</Heading>
                  {produto.categoria && <Badge colorScheme="blue">{produto.categoria}</Badge>}
                </Box>
                {produto.descricao && <Text color="gray.500" fontSize="sm" mt="8px" noOfLines={2}>{produto.descricao}</Text>}
                <Text className="product-price">R$ {Number(produto.preco).toFixed(2)}</Text>
                <Text color="gray.500" fontSize="sm">Estoque: {produto.estoque ?? '—'}</Text>
              </CardBody>
              <CardFooter gap="8px" pt="0">
                <Button as={RouterLink} to={`/produto/${id}`} size="sm" flex="1">Editar</Button>
                <Button onClick={() => handleDelete(id)} size="sm" colorScheme="red" variant="outline" flex="1">Deletar</Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
