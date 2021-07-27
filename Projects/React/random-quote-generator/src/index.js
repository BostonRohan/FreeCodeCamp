import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Background from "./background";

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
