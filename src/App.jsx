import React from 'react';
import './App.css';
import PokeTable from './page/pokeTable';
// import PokemonCards from './componenrs/pokeCard';
// import Header from './componenrs/header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/api/graphql",
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
    <PokeTable />
    </ApolloProvider>
  );
}

export default App;
