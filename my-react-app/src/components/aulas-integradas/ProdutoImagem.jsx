import { Box, Image, Text } from '@chakra-ui/react';

const imagensPorCategoria = {
  notebook: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  smartphone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  monitor: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
  teclado: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
  mouse: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
  cadeira: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&w=900&q=80',
};

function imagemPadrao(produto) {
  const texto = `${produto.nome || ''} ${produto.categoria || ''}`.toLowerCase();
  const chave = Object.keys(imagensPorCategoria).find((item) => texto.includes(item));
  return imagensPorCategoria[chave] || imagensPorCategoria.notebook;
}

export default function ProdutoImagem({ produto }) {
  const imagem = produto.imagem || produto.image || produto.foto || imagemPadrao(produto);

  return (
    <Box className="product-image-wrap">
      <Image
        src={imagem}
        alt={`Imagem do produto ${produto.nome}`}
        className="product-image"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = imagemPadrao(produto);
        }}
      />
      <Text className="product-image-fallback" aria-hidden="true">📦</Text>
    </Box>
  );
}
