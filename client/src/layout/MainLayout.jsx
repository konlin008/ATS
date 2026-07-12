import { Outlet } from "react-router-dom";
import Navbar from "@/components/NavBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-1 px-4 pt-16 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
