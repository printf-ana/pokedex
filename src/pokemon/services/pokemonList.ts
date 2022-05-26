import axios from 'axios';

import type { PokemonsList } from '../types';

export async function pokemonList(): Promise<PokemonsList> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon`;

  const response = await axios.get<PokemonsList>(endpoint);

  return response.data;
}
