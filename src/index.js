import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LoadingIndicator from "./components/LoadingIndicator";

ReactDOM.render(
  <div>
    <App />
    <LoadingIndicator />
  </div>,
  document.getElementById("root")
);
