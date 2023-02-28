import React from "react";
import ReactDOM from "react-dom";
import Project from "../src/Project"
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import cartStore from "./Redux/cartStore";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={cartStore}>
        <Project />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);