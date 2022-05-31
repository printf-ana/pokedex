import axios from 'axios';

import type { PokemonsList } from '../types';
import { getPokemonDetails } from './getPokemonDetails';

export async function pokemonList(): Promise<PokemonsList> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon`;

  const response = await axios.get<PokemonsList>(endpoint);

  const promisseArr = response.data.results.map(({ name }) =>
    getPokemonDetails(name)
  );

  const resultsPromise = await Promise.all(promisseArr);

  return {
    ...response.data,
    results: resultsPromise
  };
}
