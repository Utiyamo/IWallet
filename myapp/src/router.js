import react, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CobrarPagar from "./Pages/CobrarPagar";
import CompraRecarga from "./Pages/CompraRecarga";
import ForgotPassword from "./Pages/Forgot";
import { useSelector } from "react-redux";

import React from "react";

export default function Router() {
  const currentUser = useSelector((state) => state.user);
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return currentUser.lenght > 0 ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/Home" component={Home} />
        <PrivateRoute path="/CompraRecarga" component={CompraRecarga} />
        <PrivateRoute path="/CobrarPagar" component={CobrarPagar} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}
