import { useEffect, useState } from "react";

function FetchPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function buscarPokemon() {
    setCarregando(true);
    setErro("");

    try {
      const numero = Math.floor(Math.random() * 151) + 1;
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numero}`
      );

      if (!resposta.ok) throw new Error("Erro ao buscar Pokémon");

      const dados = await resposta.json();
      setPokemon(dados);
    } catch (error) {
      setErro("Não foi possível carregar o Pokémon.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => { buscarPokemon(); }, []);

  return (
    <div className="card">
      <h2>Fetch</h2>
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

export default FetchPokemon;