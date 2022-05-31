import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonDetails } from '../src/pokemon/PokemonDetails';
import { Pokedex } from './Pokedex';

interface RoutesProps {}

export const Routeszinhas: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path="/pokemon/:name">
        <PokemonDetails />
      </Route>
      <Route path="/">
        <Pokedex />
      </Route>
    </Routes>
  );
};

export default Routes;
