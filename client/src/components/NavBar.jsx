import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "@/store/authStore";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const user = authStore((state) => state.user);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="w-7">
            <img src="scorioLogo.png" alt="logo" />
          </div>
          <span className="text-[20px] font-semibold tracking-tight text-slate-900">
            <span className="font-bold text-blue-500">Sco</span>rio
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`text-md transition-colors ${
                  active === link.label
                    ? "text-blue-600 font-medium"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {user ? (
            ""
          ) : (
            <>
              <Button
                variant="outline"
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 h-10"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </>
          )}

          <Button className="bg-blue-600 text-white hover:bg-blue-700 h-10">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMobileOpen(false);
                  }}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    active === link.label
                      ? "text-indigo-600 font-medium bg-indigo-50"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3 border-t border-slate-200 pt-3">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
            >
              {dark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            <Button variant="ghost" className="flex-1 text-slate-700">
              Login
            </Button>
            <Button className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
