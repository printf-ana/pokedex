import styled from 'styled-components';
import { ModalProps } from './Modal';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div<ModalProps>`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #bc8f8f;
  border-radius: 2rem;
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 0.4s fade-in ease-in;
  @keyframes modal-in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
