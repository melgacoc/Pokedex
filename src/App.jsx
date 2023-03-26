// App.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PokeTable from '../src/page/pokeTable';
import PokemonDetailPage from '../src/componenrs/pokeDetails';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/api/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <PokeTable />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetailPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
