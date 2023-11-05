import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";

// Note: Remove the following line if you want to disable the API mocks.
import "./mocks";

import "./assets/scss/light.scss"

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
