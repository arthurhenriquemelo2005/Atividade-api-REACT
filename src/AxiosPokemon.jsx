import { useEffect, useState } from "react";
import axios from "axios";

function AxiosPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function buscarPokemon() {
    setCarregando(true);
    setErro("");

    try {
      const numero = Math.floor(Math.random() * 151) + 1;
      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${numero}`
      );
      setPokemon(resposta.data);
    } catch (error) {
      setErro("Não foi possível carregar o Pokémon.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => { buscarPokemon(); }, []);

  return (
    <div className="card">
      <h2>Axios</h2>
      {carregando && <p>Carregando...</p>}
      {erro && <p>{erro}</p>}
      {pokemon && !carregando && !erro && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
        </div>
      )}
      <button onClick={buscarPokemon}>Buscar outro</button>
    </div>
  );
}

export default AxiosPokemon;