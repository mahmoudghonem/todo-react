import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TodoContextProvider from "./stores/Todo.store.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoContextProvider>
  </React.StrictMode>
);
