"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeType, DEFAULT_THEME, themes } from "@/lib/theme-config";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themeConfig: (typeof themes)[ThemeType];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: ThemeType) => {
    const config = themes[newTheme];
    const root = document.documentElement;

    // Set data attribute for theme
    root.setAttribute("data-theme", newTheme);

    // Apply CSS variables
    root.style.setProperty("--color-background", config.colors.background);
    root.style.setProperty("--color-surface", config.colors.surface);
    root.style.setProperty("--color-primary", config.colors.primary);
    root.style.setProperty("--color-secondary", config.colors.secondary);
    root.style.setProperty("--color-text", config.colors.text);
    root.style.setProperty("--color-accent", config.colors.accent);
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    const savedTheme = localStorage.getItem("renova-theme") as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme(DEFAULT_THEME);
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("renova-theme", newTheme);
    applyTheme(newTheme);
  };



  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeConfig: themes[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
