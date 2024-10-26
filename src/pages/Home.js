import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../styles/Home.css';
import styled from 'styled-components';
import StyledModal from '../components/StyledModal'; // Import the custom modal component

const theme = {
  darkred: {
    default: "#8B0000",
    hover: "#CC1100",
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 20px 30px;
  font-family: "Berkshire Swash", serif;
  font-size: 55px; 
  border-radius: 5px;
  outline: 0;
  border: 0; 
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "darkred",
};

const Home = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const routeChangeAceito = () => {
    setShowModal(true); // Show the custom modal
  }

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    navigate('/movies'); // Navigate to the movies page after closing the modal
  }

  return (
    <div className='home-page'>
      <div className='invite-container'>
        <Container>
        <h1>Você foi amaldiçoado para comparecer ao dia do terror!!!!!</h1>
        <h2>Não aceitar seu destino é pior...</h2>
          <div className='buttons-container'>
            <Button onClick={routeChangeAceito}>
              Confirmo!
            </Button>
          </div>
        </Container>
      </div>
      {/* Display the custom modal if showModal is true */}
      {showModal && (
        <StyledModal
          message="Acesso liberado! Ingressos disponíveis a seguir"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
