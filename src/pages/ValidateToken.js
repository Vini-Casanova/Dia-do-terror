import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";

const supabase = createClient("url", "chave");

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

const StyledMessage = styled.p`
  font-family: "Creepster", cursive;
  font-size: 36px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${(props) => (props.error ? theme.darkred.default : "#b30000")};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const BloodDrip = styled.span`
  color: ${theme.darkred.default};
  font-size: 48px;
  display: block;
  margin-top: 20px;
`;

const ValidateToken = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [validating, setValidating] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const { data, error } = await supabase.functions.invoke(
        "validate-token",
        {
          body: { token },
        },
      );

      if (error) {
        setError("Token inválido ou expirado. Sua alma está perdida!");
      } else {
        setTimeout(() => navigate("/movies"), 3000); // Delay navigation for effect
      }

      setValidating(false);
    };

    validateToken();
  }, [token, navigate]);

  if (validating) {
    return (
      <CenteredContainer>
        <StyledMessage>Validando o pacto com as trevas...</StyledMessage>
        <BloodDrip>👻</BloodDrip>
      </CenteredContainer>
    );
  }

  if (error) {
    return (
      <CenteredContainer>
        <StyledMessage error>{error}</StyledMessage>
        <BloodDrip>💀</BloodDrip>
      </CenteredContainer>
    );
  }

  return (
    <CenteredContainer>
      <StyledMessage>
        Seu destino está selado! Prepare-se para o terror...
      </StyledMessage>
      <BloodDrip>🎃</BloodDrip>
    </CenteredContainer>
  );
};

export default ValidateToken;
