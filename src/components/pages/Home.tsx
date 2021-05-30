import React, { VFC } from "react";
import { Header } from "../organism/layout/Header";

export const Home: VFC = () => {
  return (
    <div>
      <Header />
      <p>Homeです</p>
    </div>
  );
};
