import "./ThemeToogle.css";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    try {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch {
      /* Theme remains usable when storage is blocked. */
    }
  }, [isDarkMode]);
  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDarkMode((value) => !value)}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};
