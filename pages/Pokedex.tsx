import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { Modal, Card } from '../src/componentes';
import { getPokemonDetails, pokemonList } from '../src/pokemon/services';

import type { PokemonDetail, ResultsPokemonList } from '../src/pokemon/types';

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonDetail | undefined
  >(undefined);

  const setCardClick = (pokemon: PokemonDetail) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    pokemonList().then((response) => setPokemons(response.results));
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1>Pokedex</h1>
      <div style={{ display: 'flex' }}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

      {/* {modal && (
        <Modal isOpen={modal} isClose={() => setModal(false)}>
          <h2> {selectedPokemon?.name}</h2>
          <img src={selectedPokemonDetails?.sprites.front_default} />
          {selectedPokemonDetails?.abilities.map((ability) => (
            <h3 key={ability.ability.name}>{ability.ability.name}</h3>
          ))}
        </Modal>
      )} */}
    </div>
  );
};
