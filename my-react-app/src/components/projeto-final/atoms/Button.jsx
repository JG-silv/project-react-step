import { Button as ChakraButton } from '@chakra-ui/react';

export default function Button({ children, ...props }) {
  return <ChakraButton {...props}>{children}</ChakraButton>;
}