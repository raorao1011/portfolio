import React, { VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = () => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <Link to="/">Home</Link>
      <Link to="/profile">profile</Link>
      <Link to="/product">product</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};
