import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductFilter from '../molecules/ProductFilter';
import ProductList from '../organisms/ProductList';
import PageLayout from '../templates/PageLayout';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [erro, setErro] = useState('');

  async function buscarProdutos() {
    try {
      const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/produtos');
      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Não foi possível carregar os produtos.');
      }

      const lista = Array.isArray(resultado) ? resultado : resultado.produtos || [];
      setProdutos(lista);
      setProdutosFiltrados(lista);
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
    async function carregarProdutos() {
      try {
        const resposta = await fetch('https://projeto-node-step-t5i1.vercel.app/produtos');
        const resultado = await resposta.json();
        if (!resposta.ok) throw new Error(resultado.mensagem || 'Não foi possível carregar os produtos.');
        const lista = Array.isArray(resultado) ? resultado : resultado.produtos || [];
        setProdutos(lista);
        setProdutosFiltrados(lista);
      } catch (error) {
        setErro(error.message);
      }
    }

    carregarProdutos();
  }, []);

  function handleFilter(nome) {
    setProdutosFiltrados(nome ? produtos.filter((produto) => produto.nome?.toLowerCase() === nome.toLowerCase()) : produtos);
  }

  return (
    <PageLayout>
      <Container maxW="1100px" py={{ base: '25px', md: '50px' }}>
        <Box className="catalog-intro">
          <Box>
            <Text className="catalog-eyebrow">PAINEL DE INVENTÁRIO</Text>
            <Heading className="catalog-title">Seu catálogo, sob controle.</Heading>
            <Text className="catalog-description">Organize seus produtos, acompanhe o estoque e mantenha tudo em um só lugar.</Text>
          </Box>
          <Button as={RouterLink} to="/produtos/criar" className="create-product-button" colorScheme="blue">
            <FontAwesomeIcon icon={faPlus} />
            <span>Criar produto</span>
          </Button>
        </Box>

        <Box className="catalog-toolbar">
          <Box>
            <Text className="toolbar-label">SEU ESTOQUE</Text>
            <Text className="products-count">{produtosFiltrados.length} produtos cadastrados</Text>
          </Box>
          <ProductFilter products={produtos} onFilter={handleFilter} />
        </Box>

        <ProductList products={produtosFiltrados} error={erro} onDelete={handleDelete} />
      </Container>
    </PageLayout>
  );
}
