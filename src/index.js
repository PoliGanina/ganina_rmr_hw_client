import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginProvider } from "./features/login/context/loginProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
