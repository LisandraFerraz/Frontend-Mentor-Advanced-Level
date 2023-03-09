import "./styles.css";

export function HomeComponent() {
  return (
    <div className="home-container">
      <div className="filter-section">
        <div className="filter-input">
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="filter-combo">
          <select name="countries-combo">
            <option value="1" selected>
              Filter by region
            </option>
            <option value="2">Music</option>
            <option value="2">Music</option>
            <option value="2">Music</option>
          </select>
        </div>
      </div>
      <div className="countries-cards-container"></div>
    </div>
  );
}
