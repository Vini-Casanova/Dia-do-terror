import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'reactstrap';

const Home = () => {
  let navigate = useNavigate(); 
  const routeChangeAceito = () =>{ 
  let path = `/movies`; 
  navigate(path);
  }

  const routeChangeCredo = () =>{ 
    let path = `/naoaceito`; 
    navigate(path);
    }

  return (
    <div>
      <Container>
        <h1>Voce foi convidado para o ultra Terror Day da Ferreira Pena!!!!!</h1>
        <h2>Voce confirma sua presença?</h2>
        <Button color="primary" className="px-4"
            onClick={routeChangeAceito}>
              Aceitooooo
            </Button>
          <Button color="primary" className="px-4"
            onClick={routeChangeCredo}>
              Não credo
            </Button>
      </Container>
    </div>
  );
};

export default Home;