import { FormLabel } from '@chakra-ui/react';

export default function Label({ children, ...props }) {
  return <FormLabel {...props}>{children}</FormLabel>;
}