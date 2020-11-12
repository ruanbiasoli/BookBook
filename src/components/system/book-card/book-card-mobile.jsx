import React from "react";
import { Card, Avatar } from "antd";
import styled from "styled-components";

const BookCardMobile = (props) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={props.alt} src={props.image} />}
      actions={[
        <ActionButton onClick={props.shelfOne}>Quero ler</ActionButton>,
        <ActionButton onClick={props.shelfTwo}>Lendo</ActionButton>,
        <ActionButton onClick={props.shelfThre}>Lido</ActionButton>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.title}
        description={props.description}
      />
    </Card>
  );
};

export default BookCardMobile;

const ActionButton = styled.button`
  border: none;
  background-color: #fff;
  color: #587cff;
  font-size: 18px;
  font-weight: bold;
`;
