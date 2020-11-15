import React, { useState } from "react";

function PokemonH(posts) {
  console.log(posts.match);
  return (
    <div>
      <div>Name: {posts.match.params.id}</div>
    </div>
  );
}

export default PokemonH;
