import React, { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { theme } from "../config/theme"; // Import your theme configuration
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// Create a provider for the theme
export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </AppRouterCacheProvider>
  );
};
