import jwt from "jsonwebtoken";

export default function generateToken(id, email) {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
}
