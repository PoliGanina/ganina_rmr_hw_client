import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ImgUrlProvider } from "./features/kitty/context/imgUrlProvider";
import { LoginProvider } from "./features/login/context/loginProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
        <App />
    </LoginProvider>
  </React.StrictMode>
);
