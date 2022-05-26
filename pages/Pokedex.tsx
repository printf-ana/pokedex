import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { Modal, Card } from '../src/componentes';
import { getPokemonDetails, pokemonList } from '../src/pokemon/services';

import type { PokemonDetail, ResultsPokemonList } from '../src/pokemon/types';

export const Pokedex: React.FC = () => {
  const [modal, setModal] = useToggle(false);

  const [pokemons, setPokemons] = useState<ResultsPokemonList[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    ResultsPokemonList | undefined
  >(undefined);
  const [selectedPokemonDetails, setPokemonDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  const setCardClick = (pokemon: ResultsPokemonList) => {
    setModal();
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    pokemonList().then((response) => {
      setPokemons(response.results);
    });
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonDetails(selectedPokemon.name).then((response) =>
      setPokemonDetails(response)
    );
  }, [selectedPokemon]);

  return (
    <div>
      <h1>Pokedex</h1>
      <div style={{ display: 'flex' }}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} onClick={() => setCardClick(pokemon)}>
            Pokemons: {pokemon.name}
          </Card>
        ))}
      </div>

      {modal && (
        <Modal isOpen={modal} isClose={() => setModal(false)}>
          <h2> {selectedPokemon?.name}</h2>
          <h3>{JSON.stringify(selectedPokemonDetails, undefined, 2)}</h3>
        </Modal>
      )}
    </div>
  );
};
