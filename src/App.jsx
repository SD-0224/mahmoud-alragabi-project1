import "./App.css";
import { MainContextProvider } from "./contexts/main-context";
import { Layout } from "./layout";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Layout />
      </MainContextProvider>
    </div>
  );
}

export default App;
