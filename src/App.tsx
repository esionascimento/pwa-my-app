import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Router } from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
