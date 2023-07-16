import { GlobalStyle } from "./Styles/GlobalStyle.style";
import { ThemeProvider } from "styled-components";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./Styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
