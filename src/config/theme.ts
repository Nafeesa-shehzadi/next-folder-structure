"use client";
import { createTheme } from "@mui/material/styles";

// Define the theme configuration
const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5", // Default background color
    },
    text: {
      primary: "#333", // Default text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Custom font
  },
});

export { theme };
