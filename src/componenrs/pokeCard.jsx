import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getPokemonBylimit} from '../utils/fetchAPI';
import { Link } from 'react-router-dom';
import '../style/pokeCard.css'


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

  const getTypeClass = (types) => {
    if (types) {
      switch (types[0]) {
        case "normal":
          return "normal";
        case "fighting":
          return "fighting";
        case "flying":
          return "flying";
        case "poison":
          return "poison";
        case "ground":
          return "ground";
        case "rock":
          return "rock";
        case "bug":
          return "bug";
        case "ghost":
          return "ghost";
        case "steel":
          return "steel";
        case "fire":
          return "fire";
        case "water":
          return "water";
        case "grass":
          return "grass";
        case "electric":
          return "electric";
        case "psychic":
          return "psychic";
        case "ice":
          return "ice";
        case "dragon":
          return "dragon";
        case "dark":
          return "dark";
        case "fairy":
          return "fairy";
        default:
          return "";
      }
    }
    return "";
  };

  if (loading) return <p>Wait while we find something cool!</p>;
  if (error) return <p>Error :</p>;
        
  return (
    <div className="container">
        {data.pokemons.results.map((pokemon) => (
          <div className={`pokeCard ${getTypeClass(types[pokemon.name])}`} types={types[pokemon.name]}>
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
         <button className="button"
         onClick={(event) => loadLess(event) }
         disabled={ disable }>
            Load Less
         </button>
         <button className="button"
         onClick={(event) => loadMore(event) }>
           Load More
         </button>
      </div>
    </div>
  );
};

export default PokemonCards;
