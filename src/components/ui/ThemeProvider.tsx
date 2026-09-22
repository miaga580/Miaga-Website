"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeMode } from "@/types";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check saved theme or URL query
    const urlDark = typeof window !== "undefined" && window.location.search.includes("theme=dark");
    const savedTheme = typeof window !== "undefined" ? (localStorage.getItem("miaga_theme") as ThemeMode | null) : null;
    if (urlDark || savedTheme === "dark") {
      setThemeState("dark");
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    } else {
      // Default to light as specified in prompt: "Light theme by default, plus a 'Night Sky' dark theme"
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem("miaga_theme", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* Provide an initial class on wrapper if not mounted to prevent flash */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
