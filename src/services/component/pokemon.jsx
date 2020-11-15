import React from "react";

const Pokemon = (posts) => {
  return <div>Pokemon - {posts.match.params.id}</div>;
};

export default Pokemon;
