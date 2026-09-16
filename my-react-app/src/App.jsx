
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/projeto-final/pages/Home';
import Login from './components/projeto-final/pages/Login';
import Registar from './components/projeto-final/pages/Registar';
import CriarProduto from './components/projeto-final/pages/CriarProduto';
import EditarProduto from './components/projeto-final/pages/EditarProduto';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos/criar" element={<CriarProduto />} />
          <Route path="/produto/:id" element={<EditarProduto />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
