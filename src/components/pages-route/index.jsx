import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import HomeDisplay from "../../pages/home";
import RegisterDisplay from "../../pages/register";
import Search from "../../components/system/search";
import Shelf from "../system/shelf";
import Timeline from "../system/timeline";
import AccessDenied from "../../components/access-denied/";

const Routers = () => {

  const token = useSelector((state) => state.validLogin);
  const location = useLocation();

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {token.user !== null ? (
            <Redirect
              to={{
                pathname: "/search",
                state: { from: location },
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )}
        </Route>
        <Route exact path="/login">
          <HomeDisplay />
          {/* {console.log(token)} */}
        </Route>
        <Route exact path="/register">
          <RegisterDisplay />
        </Route>
        {token.user === null ? (
          <AccessDenied />
        ) : (
          <Switch>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/shelf">
              <Shelf />
            </Route>
            <Route exact path="/timeline">
              <Timeline />
            </Route>
          </Switch>
        )}
      </Switch>
    </div>
  );
};

export default Routers;
