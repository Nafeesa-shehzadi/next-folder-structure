import React, { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { theme } from "../theme"; // Import your theme configuration

// Create a provider for the theme
export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
