import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.module.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
