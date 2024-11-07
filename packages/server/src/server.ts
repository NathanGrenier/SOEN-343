import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { makeAPIPath } from "./util.js";

import healthRouter from "./health.js";
import testDbRouter from "./routes/dbTest.js";
import deliveryConfirmationRouter from "./routes/deliveryConfirmation.js"
import deliveryShippedRouter from "./routes/deliveryShipped.js"
import deliveryPaymentRouter from "./routes/deliveryPayment.js"


const db = null; // Replace with the database singleton

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(makeAPIPath(""), rootRouter);
app.use(makeAPIPath("/health"), healthRouter);
app.use(makeAPIPath("/testdb"), testDbRouter);
app.use(makeAPIPath("/send-delivery-confirmation"), deliveryConfirmationRouter);
app.use(makeAPIPath("/send-delivery-shipped"), deliveryShippedRouter);
app.use(makeAPIPath("/send-delivery-payment"), deliveryPaymentRouter);

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientBuildPath = path.join(__dirname, "../../client/dist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientBuildPath));

  // Serve the React app for all other routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
} else if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


