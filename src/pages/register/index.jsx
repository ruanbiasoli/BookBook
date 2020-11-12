import React, { useState, useEffect } from "react";
//components
import Register from "../../components/register";
//styled-components
import { PinkCurve, Container } from "./styled-page";
import FrameRegister from "../../components/frame/index";
//NESSA PÁGINA IMPORTAREMOS A LÓGICA DO COMPONENTS

const RegisterDisplay = () => {
  const [responsiveState, setResponsiveState] = useState(window.innerWidth);

  useEffect(() => {
    setInterval(() => setResponsiveState(window.innerWidth), 1000);
  }, [window.innerWidth]);

  return responsiveState >= 1024 ? (
    <div>
      <PinkCurve />
      <Container>
        <Register />
        <FrameRegister />
      </Container>
    </div>
  ) : (
    <div>
      <Container>
        <Register />
      </Container>
    </div>
  );
};

export default RegisterDisplay;
