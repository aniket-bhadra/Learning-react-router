import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


    ///1st step to configuring routes with react router is to

//--------> connect the url in the browser_ with our react applcation
//for that react router provides a component called ---> <BrowserRouter /> -- with which we need to wrap our entire applcation
// wrap the whole wpp with BrowserRouter in index.js
