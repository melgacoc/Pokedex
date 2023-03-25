import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getPokemonBylimit} from '../utils/fetchAPI';
import '../style/pokeCard.css'

const PokemonCards = () => {
  
  const [limit, setlimit ] = useState(12);
  const [ disable, setDisabe] = useState(true);

    const { loading, error, data } = useQuery(getPokemonBylimit, {
      variables: { limit: limit, offset: 0 },
    });
    
    useEffect(() => {
      console.log(data);
    }, [data]);

    const loadMore = () => {
      setlimit(limit + 12);
      setDisabe(false);
    };

    const loadLess = () => {
      if (limit >= 12){
        setlimit(12);
        setDisabe(true);
      }
      setlimit(limit - 12);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
        
    return (
    <div className="container">
        {data.pokemons.results.map((pokemon) => (
      <div className="pokeCard">
          <div key={pokemon.id}>
            <h3 className="title">
              {pokemon.id} - {pokemon.name}
            </h3>
            <img className="pokeImg" src={pokemon.artwork} alt={pokemon.name} />
          </div>
            <button placeholder="fav">
                fav
            </button>
      </div>
      ))}
      <div className="buttonTable">
      <button
      onClick={ loadLess }
      disabled={ disable }>
        Load Less
      </button>
      <button
      onClick={ loadMore }>
        Load More
      </button>
      </div>
    </div>
    );
};

export default PokemonCards;
