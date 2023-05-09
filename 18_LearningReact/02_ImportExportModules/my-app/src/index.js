import React from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi, triplePi} from "./math.js" is better
import * as pi from "./math.js"; // Wildcard

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
