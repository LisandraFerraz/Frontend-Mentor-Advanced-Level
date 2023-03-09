import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HeaderComponent } from "./components/header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeaderComponent />
    <App />
  </React.StrictMode>
);
