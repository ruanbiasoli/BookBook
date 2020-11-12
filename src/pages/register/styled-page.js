import styled from "styled-components";

export const PinkCurve = styled.div`
  width: 50%;
  background: linear-gradient(#ff0000, #ff007a);
  height: 92vh;
  border-radius: 0px 0px 200px 0px;
  margin-top: 0;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40%;

  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 1rem auto;
    background: linear-gradient(#ff0000, #ff007a);
    height: 100vh;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
