import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getPokemonBylimit} from '../utils/fetchAPI';
import { Link } from 'react-router-dom';
import '../style/pokeCard.css'

const PokemonCards = () => {
  
  const [limit, setlimit ] = useState(12);
  const [ disable, setDisabe] = useState(true);
  const [types, setTypes] = useState({});

  const { loading, error, data } = useQuery(getPokemonBylimit, {
    variables: { limit: limit, offset: 0 },
  });
    
  useEffect(() => {
    const fetchPokemonType = async (name) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      const types = data.types.map(type => type.type.name);
      return types;
    }
    
    const fetchTypes = async () => {
      const typesObject = {};
      for (const pokemon of data.pokemons.results) {
        const types = await fetchPokemonType(pokemon.name);
        typesObject[pokemon.name] = types;
      }
      setTypes(typesObject);
    }

    if (data) {
      fetchTypes();
    }
   }, [data]);

  const loadMore = (event) => {
    event.preventDefault();
    setlimit(limit + 12);
    setDisabe(false);
  };

  const loadLess = (event) => {
    event.preventDefault();
    if (limit >= 12){
      setlimit(12);
      setDisabe(true);
    }
    setlimit(limit - 12);
  };

  if (loading) return <p>Wait while we find something cool!</p>;
  if (error) return <p>Error :</p>;
        
  return (
    <div className="container">
        {data.pokemons.results.map((pokemon) => (
           <div className="pokeCard">
             <Link to={`/pokemon/${pokemon.name}`}>
                <div key={pokemon.id}>
                   <h3 className="title">
                      {pokemon.id} - {pokemon.name}
                   </h3>
                   <img className="pokeImg" src={pokemon.artwork} alt={pokemon.name} />
                   <p>{types[pokemon.name]?.join(', ')}</p>
                 </div>
                 <button placeholder="fav">
                    fav
                 </button>
             </Link>
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
