import React from 'react';
import { StyledCard } from './StyledCard';

type CardProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Card = (props: CardProps) => {
  const { children, onClick } = props;

  return (
    <StyledCard>
      {children}
      <button onClick={onClick}>Ver mais</button>
    </StyledCard>
  );
};
