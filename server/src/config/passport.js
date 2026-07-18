import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

async function findOrCreateUser({
  providerId,
  providerField,
  email,
  name,
  avatar,
  provider,
}) {
  let user = await User.findOne({ [providerField]: providerId });
  if (user) return user;
  user = await User.findOne({ email });
  if (user) {
    user[providerField] = providerId;
    if (!user.authProviders.includes(provider)) {
      user.authProviders.push(provider);
    }
    await user.save();
    return user;
  }
  user = await User.create({
    email,
    name,
    avatar,
    [providerField]: providerId,
    authProviders: [provider],
  });
  return user;
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await findOrCreateUser({
          providerId: profile.id,
          providerField: "googleId",
          email: profile.emails[0].value,
          name: profile.displayName,
          avatar: profile.photos?.[0]?.value,
          provider: "google",
        });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    },
  ),
);

export default passport;
