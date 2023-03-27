import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getPokemonByName } from "../utils/fetchAPI";
import "../style/detail.css";
import isLoading from "./loading";

const PokemonDetails = () => {
  const { id } = useParams();
  const [abilityDescriptions, setAbilityDescriptions] = useState({});

  const { loading, error, data } = useQuery(getPokemonByName, {
    variables: { name: id },
  });

  useEffect(() => {
    const getAbilityDescriptions = async () => {
      const descriptions = {};
      for (const ability of data.pokemon.abilities) {
        const response = await fetch(ability.ability.url);
        const json = await response.json();
        for (const entry of json.effect_entries) {
          if (entry.language.name === "en") {
            descriptions[ability.ability.name] = entry.effect;
            break;
          }
        }
      }
      setAbilityDescriptions(descriptions);
    };
    getAbilityDescriptions();
  }, [data]);

  

  if (loading) return isLoading();
  if (error) return Error();

  const { name, sprites, types } = data.pokemon;

  return (
    <div className="containerDetails">
      <div className="card">
        <div className="cardContent">
          <h1 className="pokeName">{name}</h1>
          <img className="pokeImage" src={sprites.front_default} alt={name} />
          <p className="pokeTypes">
             {types.map((type) => type.type.name).join("/ ")}
          </p>
          <div className="pokeStats">
            <p>
              <strong>Height:</strong> {data.pokemon.height}
            </p>
            <p>
              <strong>Weight:</strong> {data.pokemon.weight}
            </p>
          </div>
          <p className="pokeAbilities">
            <strong>Abilities:</strong>
          </p>
          <ul>
            {data.pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <h4 className="types">{ability.ability.name}</h4>
                {abilityDescriptions[ability.ability.name]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
