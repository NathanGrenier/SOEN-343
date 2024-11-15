import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import Test from "./routes/test.tsx";
import { loader as testLoader, action as testAction } from "./routes/test.ts";
import Email from "./routes/emailsTemplate.tsx";
import Reviews from "./routes/reviews.tsx";
import PaymentForm from "./routes/payment.tsx";
import Quotation from "./routes/quotation.tsx";
import Delivery from "./routes/delivery_request.tsx";

import TrackPackage from "./routes/trackPackage.tsx";
import PackageStatus from "./routes/packageStatus.tsx";
import { loader as trackPackageLoader } from "./routes/packageStatus.ts";
import PackageNotFound from "./routes/PackageNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "emails",
    element: <Email />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/request_delivery",
    element: <Delivery />,
  },
  {
    path: "test",
    element: <Test />,
    loader: testLoader,
    action: testAction,
    children: [{ path: ":id", action: testAction }],
  },
  {
    path: "quotation",
    element: <Quotation />,
  },
  {
    path: "payment",
    element: <PaymentForm />,
    children: [
      {
        path: "test",
        element: <Test />,
        loader: testLoader,
      },
      {
        path: "quotation",
        element: <Quotation />,
      },
    ],
  },
  {
    path: "trackPackage",
    element: <TrackPackage />,
  },
  {
    path: "/trackPackage/:packageId",
    loader: ({ params }) => {
      const { packageId } = params;
      return redirect(`/trackPackage/${packageId}/status`);
    },
  },
  {
    path: "trackPackage/:packageId/status",
    element: <PackageStatus />,
    loader: trackPackageLoader,
  },
  {
    path: "/package-not-found",
    element: <PackageNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
