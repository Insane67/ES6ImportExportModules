import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
//pi herhangi bir şey olabilir ve default export edilen şeyi
//import eder

//diğerlerinin ismi birebir aynı olmalıdır

//import * as pi from "./math.js"
//pi bir object tir export edilenleri içeren
//pi.default,pi.doublePi(),pi.triplePi() şeklinde
//kullanılır kod içinde

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
