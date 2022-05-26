import React from 'react';
import { StyledCard } from './StyledCard';

type CardProps = {
  children: React.ReactNode;
};

export const Card = (props: CardProps) => {
  const { children } = props;

  return <StyledCard>{children}</StyledCard>;
};
