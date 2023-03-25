import { gql } from '@apollo/client';

export const getPokemons = gql`
query pokemons{
    pokemons{
      results{
        id
        name
        artwork
      }
      }
    }
`;


export const getPokemonByName = gql`
query pokemon($name: String!){
    pokemon(name: $name){
      name
      id
      sprites {
        front_default
      }
      types {
      type{
        name
      }
      }
      }
    }
`;

export const getPokemonById = gql`
query pokemon($id: Int!){
    pokemon(id: $id){

      types {
      type{
        name
      }
      }
      }
    }
`;

export const getPokemonBylimit = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        artwork
      }
    }
  }
`;

