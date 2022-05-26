import { StyledButton } from './StyledButton';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return <StyledButton>{children}</StyledButton>;
};
