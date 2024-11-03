import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { makeAPIPath } from "./util.js";
import { runner } from "node-pg-migrate";
import Database from "./db/db.js";

import healthRouter from "./health.js";
import testRouter from "./routes/test.js";

const db = Database.getPool();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(makeAPIPath(""), rootRouter);
app.use(makeAPIPath("/health"), healthRouter);
app.use(makeAPIPath("/test"), testRouter);

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
  app.use(cors({ methods: ["GET", "POST", "DELETE", "OPTIONS"] }));
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
      db.end().then(() => {
        console.log("Database connections closed");
        process.exit(0);
      });
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

async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL || "";
  const dir = `${__dirname}/../migrations`;

  console.log(`Running migrations from ${dir}`);
  try {
    await runner({
      databaseUrl: databaseUrl,
      migrationsTable: "pgmigrations", // Default migrations table name
      dir: dir,
      direction: "up",
      count: Infinity, // Run all pending migrations
    });

    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  }
}

// Execute migrations
runMigrations().catch(() => process.exit(1));
