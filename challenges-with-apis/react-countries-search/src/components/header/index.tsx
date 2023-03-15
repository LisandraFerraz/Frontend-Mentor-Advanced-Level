import { useState } from "react";
import "./styles.css";

export function HeaderComponent() {
  const [darkMode, setDarkMode] = useState(true);

  // function toggleDarkMode() {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // }

  return (
    <div className="header-container">
      <div className="header-txt">
        <h3>Where in the world?</h3>
      </div>
      <div className="header-theme-toggle">
        <span className="theme-toggle" onClick={() => setDarkMode(!darkMode)} />
        Dark Mode
      </div>
    </div>
  );
}
