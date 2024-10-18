import { Router } from "express";

const router = Router();

router
  .get("/", (_req, res) => {
    res.status(200).json({ message: "Hello from the server!!!" });
  })
  .post("/", (req, res) => {
    const { formData } = req.body;
    res.status(200).send(`You submitted: ${formData}`);
  });

export default router;
