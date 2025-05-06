import { Typography as MUITypography } from "@mui/material";
import type { TypographyProps as MUITypographyProps } from "@mui/material";

type TTypographyVariant = "h1" | "h2" | "h3" | "p";

interface ICustomTypographyProps extends MUITypographyProps {
  customVariant?: TTypographyVariant;
}

const components: Record<TTypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p"
} as const;

const customVariantStyles = {
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

export const Typography = ({
  customVariant = "p",
  children,
  sx,
  ...props
}: ICustomTypographyProps) => (
  <MUITypography
    component={components[customVariant]}
    sx={{
      ...customVariantStyles[customVariant],
      ...sx
    }}
    {...props}
  >
    {children}
  </MUITypography>
);
