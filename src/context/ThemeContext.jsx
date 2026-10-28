import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const readStoredTheme = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return "dark";
  }

  try {
    return window.localStorage.getItem("theme") || "dark";
  } catch {
    return "dark";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => readStoredTheme());

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem("theme", theme);
      } catch {
        // Ignore storage errors so the app still works in restricted environments.
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);