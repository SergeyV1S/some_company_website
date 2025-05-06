import { Link as MUILink } from "@mui/material";

type TLinkVariant = "link" | "button";

interface ILinkProps extends React.ComponentProps<typeof MUILink> {
  customVariant?: TLinkVariant;
}

const customVariantStyles = {
  link: {},
  button: {
    padding: "4px 32px",
    backgroundColor: "#2C2C2C",
    color: "white",
    borderRadius: "8px",
    maxWidth: "200px",
    "&:hover": {
      backgroundColor: "#404040",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    },
    "&:active": {
      transform: "translateY(0)"
    }
  }
} as const;

export const Link = ({ customVariant = "link", sx, ...props }: ILinkProps) => (
  <MUILink
    underline='none'
    sx={{
      ...customVariantStyles[customVariant],
      ...sx
    }}
    textAlign='center'
    {...props}
  ></MUILink>
);
