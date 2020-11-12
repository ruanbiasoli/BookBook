import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../../../redux/actions/";
import { useDispatch } from "react-redux";
import {
  StyledNavigationBar,
  StyledLink,
  Logo,
  LogoutButton,
} from "../../styled/search-page";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "../../../img/logo_BSP.png";
import MenuMobile from "./menu-mobile";

export const NavigationBar = (props) => {
  const [responsiveState, setResponsiveState] = useState(window.innerWidth);
  const [logoutUser, setLogoutUser] = useState({
    data: "",
    token: null,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutSystem = () => {
    history.push("/login");
    dispatch(logOutUser(setLogoutUser(logoutUser)));
  };

  useEffect(() => {
    setInterval(setResponsiveState(window.innerWidth), 1000);
    // console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <StyledNavigationBar>
      
      <div>{props.children}</div>

      <div>
        <MenuMobile onClick={() => logoutSystem()} />
      
      </div>
    </StyledNavigationBar>
  );
};
