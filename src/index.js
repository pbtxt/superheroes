import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Dashboard.css";
import "./components/SuperHeroe.css";
import App from "./components/App";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
