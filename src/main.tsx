import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource-variable/inter";

import App from "./App.tsx";
import "./index.css";
import "./icons.css";

import { Provider } from "react-redux";
import { store } from "./store";

import "@chrissgon/perfectui/perfectui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
