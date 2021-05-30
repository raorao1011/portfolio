import React, { ReactNode, VFC } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Header: VFC = (props) => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
        <Link to="/contact">contact</Link>
      </BrowserRouter>
    </div>
  );
};
