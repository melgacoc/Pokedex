import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getPokemonByName } from "../utils/fetchAPI";

const PokemonDetailPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(getPokemonByName, {
    variables: { name: id},
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Wait while we find something cool!</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, sprites, types } = data.pokemon;

  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={sprites.front_default} alt={name} />
      <h2>
        Types:
      </h2>
      <ul>
        {types.map((type) => (
           <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetailPage;
