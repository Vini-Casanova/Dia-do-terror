import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../styles/Home.css'
import styled from 'styled-components';

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
  font-size: 200px; 
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
  const routeChangeAceito = () => {
    let path = `/movies`;
    alert("Acesso liberado! \n Ingressos disponíveis a seguir")
    navigate(path);
  }

  return (
    <div class='home-page'>
      
      <div class='invite-container'>
      <Container>
        <h1>Voce foi convidado para o ultra Terror Day da Ferreira Pena!!!!!</h1>
        <h2>Voce confirma sua presença?</h2>
        <div class='buttons-container'>
          <Button
            onClick={routeChangeAceito}>
            Confirmo!
          </Button>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default Home;