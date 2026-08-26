
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/aulas-integradas/Home';
import Login from './components/aulas-integradas/Login';
import Registar from './components/aulas-integradas/Registar';
import CriarProduto from './components/aulas-integradas/CriarProduto';
import EditarProduto from './components/aulas-integradas/EditarProduto';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registar />} />
          <Route
            path="/home"
            element={localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined' ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/produtos/criar"
            element={localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined' ? <CriarProduto /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/produto/:id"
            element={localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined' ? <EditarProduto /> : <Navigate to="/login" replace />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
