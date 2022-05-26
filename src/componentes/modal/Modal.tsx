import { Overlay, StyledModal } from './StyledModal';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isClose?: () => void;
};

export const Modal = (props: ModalProps) => {
  const { children, isOpen, isClose } = props;

  return (
    <Overlay>
      <StyledModal isOpen={isOpen}>
        {children} <button onClick={isClose}>X</button>
      </StyledModal>
    </Overlay>
  );
};
