import styled from "styled-components";
import { Form, Button, Input } from "antd";

export const StyledForm = styled.div`
  width: 37%;
  height: 641px;
  border-radius: 15px;
  background-color: #fff;
  margin: 1rem auto;
  top: 10%;
  left: 20%;
  margin-left: 15%;
  box-shadow: 0px 0px 10px rgba(00, 00, 00, 25%);

  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
    height: 90vh;
    margin: 1rem auto;

    div {
      margin: 0rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
    margin-top: -150px;
    margin: 0rem auto;
    height: 70vh;
  }

  @media (min-width: 1024px) and (max-width: 4000px) {
    position: absolute;
    top: 10%;
    left: 0%;
    width: 37%;
    height: 75vh;
  }
`;

export const StyledCenterForm = styled(Form)`
  width: 80%;
  height: 600px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 21px;
    text-align: left;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 70%;
    /* margin-top: -150px; */
    margin: 5rem auto;
    height: 70vh;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 70%;
    margin-top: -150px;
    margin: 0rem auto;
    height: 70vh;
  }
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #ff0000, #ff007a);
  border-radius: 30px;
  width: 409px;
  height: 60px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  margin-top: 40px;
  margin-left: -100px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    margin: 1rem auto;
    margin-top: rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    margin: 0.2rem auto;
    margin-top: 0;
  }

  @media (min-width: 1024px) and (max-width: 4000px) {
    width: 100%;
    margin: 0.2rem auto;
    margin-top: 0;
  }
`;

export const StyledInput = styled(Input)`
  @media (min-width: 320px) and (max-width: 500px) {
    margin: 0px;
    width: 100%;
  }
`;

export const StyledFieldForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 500px) {
    margin: 0rem;
  }
`;

export const BackToLogin = styled.div`
  margin: 1rem auto;
  text-align: center;
  border-radius: 15px;
  margin-left: -6rem;
  margin-bottom: -4rem;

  p {
    font-size: 25px;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    margin-left: auto;
    margin-bottom: 2rem;

    p {
      font-size: 20px;
    }
  }
`;
