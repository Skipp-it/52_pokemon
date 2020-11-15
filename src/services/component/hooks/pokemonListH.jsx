import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../common/httpService";
import config from "../common/config.json";

function PokemonListH() {
  const [pokemons, setPokemons] = useState([]);

  //Effect Hook
  useEffect(() => {
    async function getPokemons() {
      const result = await http.get(config.apiEndpoint + "/pokemon");
      setPokemons(result.data.results);
    }
    getPokemons();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
            <td>
              {
                (pokemon = (
                  <Link to={`/pokemon/${pokemon.url.split("/")[6]}`}>
                    {pokemon.url}
                  </Link>
                ))
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokemonListH;
