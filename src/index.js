import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Dashboard.css";
import "./components/SuperHeroe.css";
import "./components/Common/LoadingCircle.css";
import "./components/Filter.css";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
