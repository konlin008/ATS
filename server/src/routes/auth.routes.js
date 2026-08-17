import express from "express";
import {
  callback,
  login,
  logout,
  me,
  register,
} from "../controllers/auth.controller.js";
import passport from "passport";
import isAuthenticated from "../middleware/isAuthanticated.js";

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

router.post("/register", register);
router.post("/login", login);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${CLIENT_URL}/login?error=google`,
  }),
  callback,
);
router.get("/me", isAuthenticated, me);
router.post("/logout", isAuthenticated, logout);
export default router;
