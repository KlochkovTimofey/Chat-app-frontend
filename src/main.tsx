import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeWrapper } from "./theme/ThemeWrapper";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <BrowserRouter>
      <ThemeProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ThemeProvider>
    </BrowserRouter>
  
);
