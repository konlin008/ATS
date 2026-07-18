import express from "express";
import { callback, login, register } from "../controllers/auth.controller.js";
import passport from "passport";

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

router.post("/register", register);
router.post("/login", login);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${CLIENT_URL}/login?error=google`,
  }),
  callback,
);
export default router;
