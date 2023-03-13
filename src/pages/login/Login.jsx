import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  StyledButton,
  StyledForm,
  StyledInput,
  LoginContainer,
} from "./Login.style";

const Login = ({setCurrentUser}) => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("engin");
    sessionStorage.setItem("user","engin")
    navigate(-1)
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Header>Join the Dev's Library</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
