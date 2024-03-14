import "./App.css";
import { Header } from "./components/header";
import { Home } from "./pages/home";

const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
const response = await fetch(topicsEndpoint);
const topics = await response.json();

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home topics={topics} />
      </main>
    </div>
  );
}

export default App;
