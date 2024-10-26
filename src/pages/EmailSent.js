import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const theme = {
  darkred: {
    default: "#8B0000",
    hover: "#CC1100",
  },
};

const CenteredContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const StyledTitle = styled.h1`
  font-family: "Berkshire Swash", serif;
  color: ${theme.darkred.default};
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledMessage = styled.p`
  font-family: "Creepster", cursive;
  font-size: 24px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: #b30000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const BloodDrip = styled.span`
  color: ${theme.darkred.default};
  font-size: 36px;
  display: block;
  margin-top: 20px;
`;

const EmailSent = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <CenteredContainer>
      <StyledTitle>Seu Destino Está Selado</StyledTitle>
      <StyledMessage>
        Um email sombrio foi enviado para {email}. Abra-o se tiver coragem...
        Clique no link maldito para confirmar sua presença no reino do terror.
        Ignore por sua conta e risco... A maldição já começou!
      </StyledMessage>
      <BloodDrip>💀 ☠️ 💀</BloodDrip>
    </CenteredContainer>
  );
};

export default EmailSent;
