import React, { VFC } from "react";
import { Route, Switch } from "react-router";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Works } from "../components/pages/Works";
import { Skills } from "../components/pages/Skills";
import { SendGrid } from "../components/pages/SendGrid";

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/sendgrid">
          <SendGrid />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
