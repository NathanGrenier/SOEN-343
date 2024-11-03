import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";

import Test from "./routes/test.tsx";
import { loader as testLoader, action as testAction } from "./routes/test.ts";

import Email from "./routes/emailsTemplate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "emails",
        element: <Email />,
      },
    ],
  },
  {
    path: "test",
    element: <Test />,
    loader: testLoader,
    action: testAction,
    children: [{ path: ":id", action: testAction }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
