import FetchPokemon from "./FetchPokemon";
import AxiosPokemon from "./AxiosPokemon";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Pokémon API</h1>

      <div className="container">
        <FetchPokemon />
        <AxiosPokemon />
      </div>
    </div>
  );
}

export default App;