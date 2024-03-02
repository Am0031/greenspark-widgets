import Routes from "./routes";
import "./App.css";
import ThemeCustomisation from "./themes";

function App() {
  return (
    <ThemeCustomisation>
      <main className="App">
        <Routes />
      </main>
    </ThemeCustomisation>
  );
}

export default App;
