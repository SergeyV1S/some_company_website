import { Button as MUIButton } from "@mui/material";
import type { ButtonProps as MUIButtonProps } from "@mui/material";

type TButtonVariant = "defaultSM" | "defaultBase";

interface TButtonProps extends MUIButtonProps {
  customVariant?: TButtonVariant;
}

const customButtonStyles = {
  defaultSM: {
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: "#2C2C2C",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#404040",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    },
    "&:active": {
      transform: "translateY(0)"
    },
    "&:disabled": {
      opacity: "80%"
    }
  },
  defaultBase: {
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: "#2C2C2C",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#404040",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
    },
    "&:active": {
      transform: "translateY(0)"
    },
    "&:disabled": {
      opacity: "80%"
    }
  }
} as const;

export const Button = ({ children, customVariant = "defaultBase", sx, ...props }: TButtonProps) => (
  <MUIButton sx={{ ...customButtonStyles[customVariant], ...sx }} {...props}>
    {children}
  </MUIButton>
);
