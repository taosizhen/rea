import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import "antd/dist/antd.css";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
