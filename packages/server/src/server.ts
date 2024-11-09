import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { makeAPIPath } from "./util.js";

import healthRouter from "./health.js";
import testDbRouter from "./routes/dbTest.js";
import dbRouter from "./routes/pakages.js";
import emailsRouter from "./routes/emails.js"

const db = null; // Replace with the database singleton

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(makeAPIPath(""), rootRouter);
app.use(makeAPIPath("/health"), healthRouter);
app.use(makeAPIPath("/testdb"), testDbRouter);
app.use(makeAPIPath("/"), emailsRouter);
app.use(makeAPIPath("/packages"), dbRouter);

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

// Graceful shutdown
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

function gracefulShutdown() {
  console.log("Received shutdown signal, starting graceful shutdown...");

  // Stop accepting new requests
  server.close(() => {
    console.log("Server closed, no longer accepting connections");

    // Close database connections
    if (db) {
      console.log("Closing database connections...");
      // Handle closing database connections
    } else {
      process.exit(0);
    }
  });

  // Force shutdown if graceful shutdown fails
  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down",
    );
    process.exit(1);
  }, 30000); // 30 seconds timeout
}
