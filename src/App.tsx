import Routes from "./routes";
import "./App.css";
import ThemeCustomisation from "./themes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B755F",
    },
    secondary: purple,
  },
});

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <ThemeCustomisation>
      <main className="App">
        <Routes />
      </main>
    </ThemeCustomisation>
    // </ThemeProvider>
  );
}

export default App;
