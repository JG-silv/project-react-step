import { Button } from '@mui/material';

export default function ButtonMUI({ label, primary }) {
  return (
    <Button variant={primary ? "contained" : "outlined"}>
      {label}
    </Button>
  );
}
