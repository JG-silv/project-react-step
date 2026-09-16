import { useEffect, useState } from 'react';
import { NavLink, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCartShopping, faMoon, faPlus, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('tema') === 'dark');

  useEffect(() => {
    document.body.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('tema', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Flex as="header" className="app-header" justify="space-between" align="center" gap="24px" wrap="wrap">
      <Link as={RouterLink} to="/home" className="brand-link">
        <Box className="brand-mark"><FontAwesomeIcon icon={faCartShopping} /></Box>
        <Box>
          <Heading size="sm">Americanos - Loja Brasil</Heading>
        </Box>
      </Link>

      <Box as="nav" className="header-nav" aria-label="Navegação principal">
        <Link as={NavLink} to="/home" end className="nav-link">Produtos</Link>
        <Link as={NavLink} to="/produtos/criar" className="nav-link"><FontAwesomeIcon icon={faPlus} /> Novo produto</Link>
      </Box>

      <Box className="header-actions">
        <Button
          className="theme-button"
          variant="ghost"
          aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={darkMode ? 'Tema claro' : 'Tema escuro'}
          onClick={() => setDarkMode((value) => !value)}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          <span>{darkMode ? 'Claro' : 'Escuro'}</span>
        </Button>
        <Button className="logout-button" variant="outline" onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Sair</span>
        </Button>
      </Box>
    </Flex>
  );
}

