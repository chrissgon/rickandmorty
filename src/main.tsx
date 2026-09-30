import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

import { setMode } from "@chrissgon/perfectui/mode";
import "@chrissgon/perfectui/perfectui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// perfectui: the theme color is the --pui-theme token in index.css
setMode("dark");
