import styled from "styled-components";
import { Form, Input } from "antd";

const StyledAside = styled.aside`
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 122, 1)
  );
  height: 100vh;
  position: absolute;
  width: 40%;
  float: left;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15vh;
    position: relative;
  }
`;

const StyledButton = styled.button`
  background-image: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 122, 1)
  );
  border-radius: 15px;
  border: none;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 501px) and (max-width: 800px) {
    width: 25%;
    margin-left: 45%;
    margin-top: 3%;
  }

  @media screen and (max-width: 500px) {
    width: 25%;
    margin-left: -30%;
    margin-top: 3%;
  }
`;

const StyledSubscribeButton = styled(StyledButton)`
  background-image: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 122, 1)
  );
  border-radius: 15px;
  border: none;
  color: white;
  margin-top: 40%;

  @media (min-width: 351px) and (max-width: 800px) {
    width: 80vw;
    align-self: center;
    text-align: center;
    margin-top: 35%;
    margin-left: 10%;
  }

  @media screen and (max-width: 350px) {
    width: 80vw;
    align-self: center;
    text-align: center;
    margin-top: 55%;
    margin-left: 10%;
  }
`;

const StyledInput = styled(Input)`
  background-color: rgba(229, 229, 229, 1);
  border: none;
  margin-left: 5px;
`;

const StyledPassword = styled(Input)`
  background-color: rgba(229, 229, 229, 1);
  border: none;
  margin-left: 10px;

  @media screen and (max-width: 350px) {
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 10vh;
  margin-bottom: 40%;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  left: 27.5%;
  top: 12%;
  height: 75vh;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledP = styled.p`
  width: 23vw;
  text-align: justify;
  height: 25vh;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin: auto;
    width: 80vw;
    margin-left: 10%;
    margin-top: 70%;
  }
`;

export {
  StyledButton,
  StyledAside,
  StyledInput,
  StyledForm,
  StyledImage,
  StyledSubscribeButton,
  StyledP,
  StyledPassword,
};
