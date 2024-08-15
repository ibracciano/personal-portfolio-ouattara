import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor"
// import { ScrollToTop } from "./composants/ScrollTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AnimatedCursor />
  </StrictMode>
);
