import { Router } from "express";
import { Resend } from "resend";
import ContactEmail from "../emailTemplates/contactEmail.js";
import dotenv from "dotenv";

const router = Router();
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: "swiftsend@christellecharles.agency",
      to: "nathangrenier01@gmail.com",
      subject: subject,
      react: ContactEmail({ email, message }),
    });
    if (error) {
      res.status(404).json({ error: "Error sending email" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
