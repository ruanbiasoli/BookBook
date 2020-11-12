import React from "react";
import { GenderFrame } from "../../frame/styled-frame";
import CategoryImage from "../../../img/undraw_Bibliophile_hwqc.png";
import styled from "styled-components";

const GenderCard = (props) => {
  return (
    <BoxFrame>
      <Image src={props.StyledCategoryImage} alt="books" />
      <h2>{props.category}</h2>
    </BoxFrame>
  );
};

export default GenderCard;

const StyledCategoryImage = styled(CategoryImage)`
  width: 269px;
  /* height: 179px; */
`;

const BoxFrame = styled(GenderFrame)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
`;

const Image = styled.img`
  width: 150px;
`;
