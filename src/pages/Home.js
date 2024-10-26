import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "reactstrap";
import { createClient } from "@supabase/supabase-js";
import "../styles/Home.css";
import styled, { keyframes } from "styled-components";

const theme = {
  darkred: {
    default: "#8B0000",
    hover: "#CC1100",
  },
};

const CenteredContainer = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledInput = styled.input`
  padding: 10px 20px;
  font-family: "Berkshire Swash", serif;
  font-size: 24px;
  border-radius: 5px;
  border: 2px solid ${theme.darkred.default};
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
`;

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

const StyledTitle = styled.h1`
  font-family: "Berkshire Swash", serif;
  color: ${theme.darkred.default};
  font-size: 48px;
  margin-bottom: 20px;
`;

const StyledSubtitle = styled.h2`
  font-family: "Berkshire Swash", serif;
  color: ${theme.darkred.default};
  font-size: 36px;
  margin-bottom: 30px;
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Notification = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  font-family: "Berkshire Swash", serif;
  font-size: 18px;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-in;
  background-color: ${(props) =>
    props.type === "error"
      ? "#FF6B6B"
      : props.type === "success"
        ? "#4ECB71"
        : "#FFA94D"};
  color: white;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${theme.darkred.default};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-top: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const supabase = createClient("url", "chave");

const Home = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      // Check if email exists in the database
      const { data, error } = await supabase
        .from("guests")
        .select("id")
        .eq("email", email)
        .single();

      if (error) throw error;

      if (data) {
        // Email exists, send validation email
        const { error: sendError } = await supabase.functions.invoke(
          "send-email",
          {
            body: { email },
          },
        );

        if (sendError) throw sendError;

        setNotification({
          type: "success",
          message: "Email de confirmação enviado!",
        });
        setTimeout(() => navigate("/email-sent", { state: { email } }), 2000);
      } else {
        setNotification({
          type: "error",
          message: "Email não encontrado na lista de convidados.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        type: "error",
        message: "Ocorreu um erro. Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <CenteredContainer>
        <StyledTitle>
          Você foi amaldiçoado para comparecer ao dia do terror!!!!!
        </StyledTitle>
        <StyledSubtitle>Não aceitar seu destino é pior...</StyledSubtitle>
        <Form onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email!!"
            required
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Confirmo!"}
          </Button>
        </Form>
        {loading && <LoadingSpinner />}
        {notification && (
          <Notification type={notification.type}>
            {notification.message}
          </Notification>
        )}
      </CenteredContainer>
    </div>
  );
};

export default Home;
