import { Typography as MUITypography, TypographyProps as MUITypographyProps } from "@mui/material";
import { ElementType } from "react";

type TTypographyVariant = "h1" | "h2" | "h3" | "p";

interface ICustomTypographyProps extends Omit<MUITypographyProps, "variant"> {
  variant?: TTypographyVariant;
}

const components: Record<TTypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p"
} as const;

const variantStyles = {
  h1: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1
  },
  h2: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1
  },
  h3: {
    fontSize: 24,
    lineHeight: 1
  },
  p: {
    fontSize: 16,
    lineHeight: 1.5
  }
} as const;

export const Typography = ({ variant = "p", children, sx, ...props }: ICustomTypographyProps) => (
  <MUITypography
    component={components[variant]}
    sx={{
      ...variantStyles[variant],
      ...sx
    }}
    {...props}
  >
    {children}
  </MUITypography>
);
