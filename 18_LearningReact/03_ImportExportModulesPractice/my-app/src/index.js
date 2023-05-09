import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(10, 10)}</li>
    <li>{subtract(10, 10)}</li>
    <li>{multiply(10, 10)}</li>
    <li>{divide(10, 10)}</li>
  </ul>,
  document.getElementById("root")
);
