import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { Modal } from '../src/componentes';
import { Card } from '../src/componentes/card';

const pokemonsArray: string[] = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon'
];

export const Pokedex: React.FC = () => {
  const [modal, setModal] = useToggle(false);
  const [pokemons, setPokemons] = useState<string[]>(pokemonsArray);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    ''
  );

  const setSeeMoreEvent = (pokemon: string) => {
    setModal();
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div style={{ display: 'flex' }}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon} onClick={() => setSeeMoreEvent(pokemon)}>
            Pokemons: {pokemon}
          </Card>
        ))}
      </div>

      {modal && (
        <Modal isOpen={modal} isClose={() => setModal(false)}>
          <h2> {selectedPokemon}</h2>
        </Modal>
      )}
    </div>
  );
};
