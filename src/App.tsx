import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
