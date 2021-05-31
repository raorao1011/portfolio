import React from "react";
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./components/organism/layout/Header";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
