import { Link } from "@mui/material";

type TCustomLinkProps = React.ComponentProps<typeof Link>;

export const CustomLink = (props: TCustomLinkProps) => (
  <Link underline='none' textAlign='center' color='black' {...props}></Link>
);
