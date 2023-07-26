import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Router } from "./Router.jsx";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <Router />
    </AnimatePresence>
  </React.StrictMode>
);
