import { Box } from '@chakra-ui/react';
import Header from '../organisms/Header';

export default function PageLayout({ children, withHeader = true }) {
  return <Box className="page-shell">{withHeader && <Header />}<Box as="main">{children}</Box></Box>;
}