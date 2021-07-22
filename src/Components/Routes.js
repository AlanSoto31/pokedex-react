import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from '../Containers/PokemonList';
import PokemonDet from '../Containers/PokemonDet';

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={PokemonList} exact />
      <Route path="/:id" exact component={PokemonDet} />
      <Route component={Error} />
    </Switch>
  </>
);

export default Routes;