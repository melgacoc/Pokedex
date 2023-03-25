import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getPokemons } from '../utils/fetchApi';

const PokemonCards = ({ limit }) => {
    
    const { loading, error, data } = useQuery(getPokemons, {
      variables: { limit },
    });
    
    useEffect(() => {
      console.log(data);
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
        
    return (
      <div>
        {data.pokemons.results.map((pokemon) => (
          <div key={pokemon.id}>
            <h3>
              {pokemon.name} - {pokemon.id}
            </h3>
            <img src={pokemon.artwork} alt={pokemon.name} />
          </div>
        ))}
      </div>
    );
};

export default PokemonCards;
