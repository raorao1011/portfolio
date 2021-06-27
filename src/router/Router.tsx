import React, { VFC } from "react";
import { Route, Switch } from "react-router";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Works } from "../components/pages/Works";
import { Skills } from "../components/pages/Skills";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        </Route>
        <Route path="/skills">
          <HeaderLayout>
            <Skills />
          </HeaderLayout>
        </Route>
        <Route path="/works">
          <HeaderLayout>
            <Works />
          </HeaderLayout>
        </Route>
        <Route path="/contact">
          <HeaderLayout>
            <Contact />
          </HeaderLayout>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
