import type { NextPage } from 'next';
import { Card } from '../src/componentes/card';
import { Pokedex } from './Pokedex';

const Home: NextPage = () => {
  return (
    <>
      <Pokedex />
    </>
  );
};

export default Home;
