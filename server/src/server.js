import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

const port = 8080;

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/status", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
