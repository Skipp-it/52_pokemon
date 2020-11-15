import React from "react";

const Type = (posts) => {
  return <div>Type - {posts.match.params.id}</div>;
};

export default Type;
