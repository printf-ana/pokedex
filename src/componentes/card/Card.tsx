import Image from 'next/image';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonDetail, PokemonsList } from '../../pokemon/types';
import { StyledCard } from './StyledCard';

type CardProps = {
  pokemon: PokemonDetail;
};

export const Card = (props: CardProps) => {
  const { pokemon } = props;

  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate(`/pokemon/${pokemon.name}`);
  // }

  return (
    <StyledCard title={pokemon.name}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.types.map((type) => (
        <h3 key={type.type.name}>{type.type.name}</h3>
      ))}
      <button>Ver mais</button>
    </StyledCard>
  );
};
