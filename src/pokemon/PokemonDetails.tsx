import Image from 'next/image';
import React, { useState } from 'react';
import { PokemonDetail } from './types';

export const PokemonDetails = ({ pokemon }: any) => {
  const [selectedPokemonDetails, setPokemonDetails] = useState<PokemonDetail>();

  return (
    <>
      <img
        src={selectedPokemonDetails?.sprites.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      {pokemon.types.map((type) => (
        <div key={type}>{type.type.name}</div>
      ))}
    </>
  );
};
