import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getPokemonBylimit} from '../utils/fetchAPI';
import { Link } from 'react-router-dom';
import '../style/pokeCard.css';
import isLoading from "./loading";
import Error from "./erro";
import { getTypeClass } from "../utils/functions";

const PokemonCards = () => {
  
  const [disable, setDisabe] = useState(true);
  const [types, setTypes] = useState({});
  const [limit, setlimit ] = useState(18);
  // const [favorites, setFavorites] = useState([]);
  // const [search, setSearch] = useState('');


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
      const typesResponse = {};
      for (const pokemon of data.pokemons.results) {
        const types = await fetchPokemonType(pokemon.name);
        typesResponse[pokemon.name] = types;
      }
      setTypes(typesResponse);
    }

    if (data) {
      fetchTypes();
    }

    if (limit > 18) {
      setDisabe(false);
    }

    if (limit === 18){
      setDisabe(true);
    }
    
   }, [data, limit]);

  const loadMore = (event) => {
    event.preventDefault();
    setlimit(limit + 18);
    setDisabe(false);
  };

  const loadLess = (event) => {
    event.preventDefault();
    setlimit(limit - 18);
  };

  if (loading) return isLoading();
  if (error) return Error();
        
  return (
    <div className="container">
        {data.pokemons.results.map((pokemon) => (
          <div className={`pokeCard
          ${getTypeClass(types[pokemon.name])}`}
          types={types[pokemon.name]}>
             <Link to={`/pokemon/${pokemon.name}`}
             className="link"
             artwork={ pokemon.artwork }>
                <div key={pokemon.id}>
                   <h3 className="title"
                   id="toUpperCase">
                      #{pokemon.id} - {pokemon.name}
                   </h3>
                   <img className="pokeImg" src={pokemon.artwork} alt={pokemon.name} />
                   <p>{types[pokemon.name]?.map((
                      type) => type.charAt(0).toUpperCase() +
                      type.slice(1)).join(' / ')}
                   </p>
                 </div>
             </Link>
           </div>
        ))}
      <div className="buttonTable">
         <button
         type="button" 
         className="button"
         onClick={(event) => loadLess(event) }
         disabled={ disable }>
            Load Less
         </button>
         <button
         type="button"
         className="button"
         onClick={(event) => loadMore(event) }>
           Load More
         </button>
      </div>
    </div>
  );
};

export default PokemonCards;
