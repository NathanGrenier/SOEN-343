import { Router } from "express";

const router = Router();

router.get("/email", (_req, res) => {
  res.status(200).json({ message: "Hello from the server!!!" });
});

export default router;
