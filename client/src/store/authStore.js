import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),
      clearUser: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "scorio-auth",
    },
  ),
);
export default authStore;
