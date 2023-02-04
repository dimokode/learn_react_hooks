import React from "react";
import Button from "./button";
import Display from "./display";
import { NumberProvider } from "./context";

function App() {
  return (
    <NumberProvider> 
        <div className="App">
        <h1>Simple Calculator</h1>
        <Display />
        <Button />
      </div>
    </NumberProvider>
  );
}
export default App;