// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
// import { ScrollToTop } from "./composants/ScrollTop.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
    <AnimatedCursor />
  </Provider>
  // </StrictMode>
);
