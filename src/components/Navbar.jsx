import { Link, NavLink } from "react-router-dom";
import {
  Moon,
  Sun,
  Shield,
  Languages,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[language];

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/awareness", label: t.nav.awareness },
    { path: "/challenges", label: t.nav.challenges },
    { path: "/assessment", label: t.nav.assessment },
    { path: "/chatbot", label: t.nav.chatbot },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/90">

      <nav className="mx-auto max-w-7xl px-6">

        <div className="flex h-[72px] items-center justify-between">

          <Link to="/" className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
              <Shield size={22} />
            </div>

            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Kav<span className="text-cyan-500">aCh</span>
            </span>

          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-7 md:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? "font-semibold text-cyan-500 dark:text-cyan-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            <button
              onClick={() =>
                changeLanguage(language === "en" ? "hi" : "en")
              }
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"
            >
              <Languages size={16} />
              <span className="hidden sm:inline">
                {language === "en" ? "हिं" : "EN"}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 md:hidden dark:border-slate-700"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </div>

        {/* MOBILE NAV */}

        {menuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden dark:border-slate-800">

            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-500"
                        : "text-slate-600 dark:text-slate-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

            </div>

          </div>
        )}

      </nav>

    </header>
  );
};

export default Navbar;