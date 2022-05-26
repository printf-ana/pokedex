import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { Modal } from '../src/componentes';
import { Card } from '../src/componentes/card';

interface PokemonList {
  name: string;
  url: string;
}

export const Pokedex: React.FC = () => {
  const [modal, setModal] = useToggle(false);
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonList | undefined
  >(undefined);

  const setCardClick = (pokemon: PokemonList) => {
    setModal();
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

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
        </Modal>
      )}
    </div>
  );
};
