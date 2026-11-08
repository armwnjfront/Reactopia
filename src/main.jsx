import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./setting.css";
import Router from "./router/router";
import { RouterProvider } from "react-router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
