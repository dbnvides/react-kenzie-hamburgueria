import "./App.css";
import { Menu } from "./components/Menu";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu />
    </div>
  );
}

export default App;
