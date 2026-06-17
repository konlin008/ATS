import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  genrateResume,
  uploadResume,
} from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/generate", genrateResume);

export default router;
