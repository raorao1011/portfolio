import React, { FC, ReactNode } from "react";
import { Header } from "../organism/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
