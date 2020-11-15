import React from "react";

function PokemonH(pokemon) {
  return (
    <div>
      <div>Name: {pokemon.match.params.id}</div>
    </div>
  );
}

export default PokemonH;
