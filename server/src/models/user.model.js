import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      select: false, 
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    githubId: {
      type: String,
      unique: true,
      sparse: true,
    },
    authProviders: {
      type: [String],
      default: ["local"],
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
