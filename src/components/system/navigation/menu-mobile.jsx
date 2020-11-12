import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

const MenuMobile = (props) => {
  const [menuOverlay, setMenuOverlay] = useState(false);

  const handleClick = () => {
    setMenuOverlay(!menuOverlay);
  };

  return (
    <div>
      <Menu onClick={handleClick}>
        {menuOverlay === false ? <MenuOutlined /> : <CloseOutlined />}
      </Menu>
      {menuOverlay === false ? null : (
        <MenuContainer>
          <MenuItem>
            <StyledLink to="/search">Pesquisar</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/shelf">Prateleira</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/timeline">Timeline</StyledLink>
          </MenuItem>

          <MenuItem>
            <ItemButton onClick={props.onClick}>Sair</ItemButton>
          </MenuItem>
        </MenuContainer>
      )}
    </div>
  );
};

export default MenuMobile;

const Menu = styled.button`
  width: 4rem;
  background-color: rgba(0, 0, 0, 0%);
  border: none;
  color: #fff;
  font-size: 20px;
`;

const MenuContainer = styled.div`
  /* height: 15%; */
  width: 100%;
  /* border-radius: 5px; */
  position: fixed;
  right: 0;
  left: 0%;
  top: 103px;
  background: linear-gradient(45deg, #ff0000, #ff007a);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 25%);
`;

const MenuItem = styled.div`
  margin: 0.5rem auto;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

const ItemButton = styled.button`
  border: none;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0%);
`;
