import { FormControl } from '@chakra-ui/react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

export default function FormField({ label, children, ...inputProps }) {
  return (
    <FormControl isRequired={inputProps.required} mb="15px">
      <Label>{label}</Label>
      {children || <Input {...inputProps} />}
    </FormControl>
  );
}