import { useState } from 'react';
import { Autocomplete, Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import { Box } from '@chakra-ui/react';

const muiTheme = createTheme();

export default function ProductFilter({ products, onFilter }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const options = products.map((product) => product.nome).filter(Boolean);

  function handleFilter() {
    onFilter(selectedProduct || '');
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <Box className="products-filter" display="flex" gap="10px" alignItems="center" flexWrap="wrap" mb="25px">
        <Autocomplete
          options={options}
          value={selectedProduct}
          onChange={(_, value) => setSelectedProduct(value)}
          renderInput={(params) => <TextField {...params} label="Buscar produto" size="small" />}
        />
        <Button variant="contained" onClick={handleFilter}>Filtrar</Button>
      </Box>
    </ThemeProvider>
  );
}