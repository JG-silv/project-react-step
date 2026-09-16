import { Badge, Box, Button, Card, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ProdutoImagem from '../pages/ProdutoImagem';

export default function ProductCard({ product, onDelete }) {
  const id = product._id || product.id;

  return (
    <Card className="product-card" overflow="hidden">
      <ProdutoImagem produto={product} />
      <CardBody>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap="10px">
          <Heading size="md" noOfLines={1}>{product.nome}</Heading>
          {product.categoria && <Badge colorScheme="blue">{product.categoria}</Badge>}
        </Box>
        {product.descricao && <Text color="gray.500" fontSize="sm" mt="8px" noOfLines={2}>{product.descricao}</Text>}
        <Text className="product-price">R$ {Number(product.preco).toFixed(2)}</Text>
        <Text color="gray.500" fontSize="sm">Estoque: {product.estoque ?? '—'}</Text>
      </CardBody>
      <CardFooter gap="8px" pt="0">
        <Button as={RouterLink} to={`/produto/${id}`} size="sm" flex="1">Editar</Button>
        <Button onClick={() => onDelete(id)} size="sm" colorScheme="red" variant="outline" flex="1">Deletar</Button>
      </CardFooter>
    </Card>
  );
}