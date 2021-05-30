import React, { VFC } from "react";
import { Route, Switch } from "react-router";
import { Header } from "../components/organism/layout/Header";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Product } from "../components/pages/Product";

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
