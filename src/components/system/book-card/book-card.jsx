import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const BookCard = (props) => {
  return (
    <ShadowCard
    onClick={props.click}
      hoverable
      style={{ width: 261 }}
      cover={<StyledCover alt={props.alt} src={props.image} />}
    >
      <ShadowCard.Meta title={props.title} description={props.description} />
    </ShadowCard>
  );
};

export default BookCard;

const StyledCover = styled.img`
  width: 261px;
  height: 276px;
  border-radius: 5px 5px 0px 0px;
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 25%);
`;
