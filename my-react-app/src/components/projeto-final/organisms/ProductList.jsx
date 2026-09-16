import { SimpleGrid, Text } from '@chakra-ui/react';
import ProductCard from '../molecules/ProductCard';

export default function ProductList({ products, error, onDelete }) {
  if (error) return <Text color="red.500">{error}</Text>;
  if (products.length === 0) return <Text>Nenhum produto encontrado.</Text>;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px" mt="10px">
      {products.map((product) => <ProductCard key={product._id || product.id} product={product} onDelete={onDelete} />)}
    </SimpleGrid>
  );
}