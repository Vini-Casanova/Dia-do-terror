import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../styles/Event.css'
import styled from 'styled-components';

const theme = {
  darkred: {
    default: "#8B0000",
    hover: "#CC1100",
  },
  orangered: {
    default: "#CC1100",
    hover: "#660000",
  },
};



const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 20px 30px; 
  font-size: 20px; 
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
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
    navigate(path);
  }

  const routeChangeCredo = () => {
    let path = `/naoaceito`;
    navigate(path);
  }

  return (
    <div class='invite-container'>
      <Container>
        <h1>Voce foi convidado para o ultra Terror Day da Ferreira Pena!!!!!</h1>
        <h2>Voce confirma sua presença?</h2>
        <div class='buttons-container'>
          <Button theme="orangered"
            onClick={routeChangeCredo}>
            Não credo
          </Button>
          <Button
            onClick={routeChangeAceito}>
            Aceitooooo
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;