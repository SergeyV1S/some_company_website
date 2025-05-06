import { TextField } from "@mui/material";

type TInputProps = React.ComponentProps<typeof TextField>;

export const Input = ({ sx, size, ...props }: TInputProps) => (
  <TextField sx={{ ...sx }} size={size ?? "small"} variant='outlined' {...props} />
);
