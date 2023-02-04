import React, { useContext } from "react";
import { NumberContext } from "./context";

function Display() {
  const { state } = useContext(NumberContext); // (*)
  return <p>Number: {state.value}</p>;
}
export default Display;