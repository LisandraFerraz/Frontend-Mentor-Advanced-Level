import "./styles.css";

export function HeaderComponent() {
  return (
    <div className="header-container">
      <div className="header-txt">
        <h3>Where in the world?</h3>
      </div>
      <div className="header-theme-toggle">
        <span className="theme-toggle" />
        Dark Mode
      </div>
    </div>
  );
}
