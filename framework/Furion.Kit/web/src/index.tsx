import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Component from "./pages/component";
import ErrorPage from "./pages/error-page";
import Exception from "./pages/exception";
import Explore from "./pages/explore";
import Generate from "./pages/generate";
import OpenAPI from "./pages/openapi";
import Panel from "./pages/panel";
import Setting from "./pages/setting";
import Starter from "./pages/starter";
import SystemInfo from "./pages/systeminfo";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Panel />,
          },
          {
            path: "component",
            element: <Component />,
          },
          {
            path: "exception",
            element: <Exception />,
          },
          {
            path: "openapi",
            element: <OpenAPI />,
          },
          {
            path: "starter",
            element: <Starter />,
          },
          {
            path: "generate",
            element: <Generate />,
          },
          {
            path: "systeminfo",
            element: <SystemInfo />,
          },
          {
            path: "explore",
            element: <Explore />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
