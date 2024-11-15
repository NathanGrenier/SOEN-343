import { Router } from "express";
import pool from "../database/db.js";

const router = Router();

router.get("/:packageId/status", async (req, res) => {
  const { packageId } = req.params;

  const sql = `SELECT pickUpAddress, pickUpDate, dropOffAddress, dropOffDate, status FROM Packages WHERE id = ${packageId};`;
  try {
    const result = await pool.query(sql);
    if (result.recordset.length === 0) {
      res.status(404).json({ error: "Package not found" });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
