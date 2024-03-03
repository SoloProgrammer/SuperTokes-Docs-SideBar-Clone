import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SideBarProvider } from "./context/SideBarProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </React.StrictMode>
);
