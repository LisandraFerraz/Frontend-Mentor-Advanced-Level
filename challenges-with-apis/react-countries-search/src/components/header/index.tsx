import { useState } from "react";
import { switchTheme } from "../../utils/Hooks/darkmode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import "./styles.css";

export function HeaderComponent() {
  const [colorTheme, setTheme] = switchTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === "dark" ? false : true
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };

  return (
    <div className="header-container">
      <div className="header-txt">
        <h3>Where in the world?</h3>
      </div>
      <div className="header-theme-toggle">
        <DarkModeSwitch
          checked={darkTheme}
          onChange={toggleDarkMode}
          size={22}
        />
        {/* <span className="theme-toggle" onClick={toggleDarkMode} /> */}
        Dark Mode
      </div>
    </div>
  );
}
