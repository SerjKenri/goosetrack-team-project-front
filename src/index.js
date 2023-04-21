import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./stylesheet/global.css";
import { ManageThemeProvider } from "core/theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ManageThemeProvider>
      <App />
    </ManageThemeProvider>
  </React.StrictMode>
);
