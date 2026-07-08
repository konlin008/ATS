import express from "express";
import isAuthenticated from "../middleware/isAuthanticated.js";
import upload from "../middleware/multer.middleware.js";
import {
  genrateResume,
  uploadResume,
} from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/upload", isAuthenticated, upload.single("resume"), uploadResume);
router.get("/generate", isAuthenticated, genrateResume);

export default router;
