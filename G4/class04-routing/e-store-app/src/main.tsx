import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Must wrap App with browser route to enable react-router components to work in the application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
