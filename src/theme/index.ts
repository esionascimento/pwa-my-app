import { createTheme, PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#123255",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FFFFFF",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#E5E5E5",
  },
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        "body,html": {
          margin: 0,
          padding: 0,
        },
        "#root": {
          minHeight: "100vh",
        },
      }),
    },
  },
  palette,
});

export default theme;
