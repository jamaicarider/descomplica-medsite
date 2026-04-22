"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    allVariants: { color: "#363636" },

    body1: {
      fontSize: 16,
      fontWeight: 400,
      "& strong": { fontWeight: 700 },
    },

    body2: { fontSize: 14, fontWeight: 400 },

    h1: {
      fontFamily: "var(--font-montserrat), Arial, sans-serif",
      fontSize: 32,
      fontWeight: 700,
      "@media (min-width:600px)": { fontSize: 48 },
    },

    h2: {
      fontFamily: "var(--font-montserrat), Arial, sans-serif",
      fontSize: 24,
      fontWeight: 700,
      "@media (min-width:600px)": { fontSize: 32 },
    },

    h3: { fontSize: 20, fontWeight: 600 },
    h4: { fontSize: 18, fontWeight: 700 },
    h5: { fontSize: 16, fontWeight: 700 },
    h6: { fontSize: 13, fontWeight: 700 },
    
    
    subtitle1: { fontSize: 16, fontWeight: 500 },
    subtitle2: { fontSize: 14, fontWeight: 600 },
    caption: { fontSize: 12, fontWeight: 400 },
    overline: { fontSize: 10, fontWeight: 900, textTransform: "uppercase" },
    button: { fontSize: 14, fontWeight: 600, textTransform: "none" },
  },

  palette: {
    primary: { light: "#e5e5ff", main: "#252552" },
    secondary: { light: "#fff2f2", main: "#D1224A" },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "8px",
          fontSize: "16px",
          "@media (min-width:600px)": {
            padding: "8px 22px",
            fontSize: "0.9375rem",
          },
        },
      },
    },
  },
});

export default theme;

