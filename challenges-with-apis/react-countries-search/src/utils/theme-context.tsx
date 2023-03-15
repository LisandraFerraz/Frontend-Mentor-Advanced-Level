import { createContext, useEffect, useState } from "react";

type themeName = "light" | "dark" | string;
type ThemeContextType = {
  theme: themeName;
  setTheme: (name: themeName) => void;
};

const getOriginalTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storageTheme = window.localStorage.getItem("color-theme");
    console.log(storageTheme);

    if (typeof storageTheme === "string") {
      return storageTheme;
    }
  }
  return "light";
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = (originalTheme: any, children: any) => {
  const [theme, setTheme] = useState(getOriginalTheme);

  setTheme("dark");

  const setNewTheme = (theme: any) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };
  // console.log(theme);

  if (originalTheme) {
    setNewTheme(originalTheme);
  }

  useEffect(() => {
    setNewTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
