import { PokemonDetail } from './PokemonDetail';

export interface ResultsPokemonList {
  name: string;
  url: string;
}

export interface PokemonsList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonDetail[];
}
