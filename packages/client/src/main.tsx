import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import Test, { loader as testLoader } from "./routes/test.tsx";
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
    path: "/test",
    element: <Test />,
    loader: testLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
