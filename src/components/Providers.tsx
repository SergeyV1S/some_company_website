"use client";

import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
