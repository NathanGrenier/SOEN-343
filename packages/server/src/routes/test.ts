import { Router } from "express";
import Database from "../db/db.js";

const db = Database.getPool();

const router = Router();

router
  .get("/", async (_req, res) => {
    try {
      const result = await db.query(
        "SELECT * FROM test ORDER BY created_at DESC",
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .post("/", async (req, res) => {
    const { name } = req.body;
    try {
      await db.query("INSERT INTO test (name) VALUES ($1) RETURNING *", [name]);
      res.status(201).json({ message: "Entry created successfully" });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await db.query("DELETE FROM test WHERE id = $1", [id]);
      res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

export default router;
