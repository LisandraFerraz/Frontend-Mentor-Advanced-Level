import { useEffect, useState } from "react";

export function switchTheme() {
  const [theme, setTheme] = useState(
    String(localStorage.getItem("color-theme"))
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const rootTheme = window.document.documentElement;

    rootTheme.classList.remove(colorTheme);
    rootTheme.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, setTheme]);

  return [colorTheme, setTheme] as const;
}
