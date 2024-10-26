import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #8B0000; /* Dark red theme */
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  width: 400px;
  text-align: center;
  font-family: "Berkshire Swash", serif;
`;

const ModalButton = styled.button`
  background-color: #CC1100;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 250ms ease;

  &:hover {
    background-color: #FF3300;
  }
`;

const StyledModal = ({ message, onClose }) =>{ 
    const number = Math.floor(Math.random() * 7) + 1;

    return (
  <ModalBackdrop>
    <ModalContent>
      <h2>{message}</h2>
      <h1>Convites restantes: {number}</h1>
      <ModalButton onClick={onClose}>Ok</ModalButton>
    </ModalContent>
  </ModalBackdrop>
    )
;
}

export default StyledModal;
