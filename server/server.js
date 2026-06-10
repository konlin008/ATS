import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";
import resumeRouter from "./src/routes/resume.routes.js";

dotenv.config();
connectDB();

const app = express();

const port = 8080;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/resume", resumeRouter);

app.get("/status", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
