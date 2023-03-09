import "./styles.css";
import br_flag from "./../../assets/br_flag.png";

export function CountryCard() {
  return (
    <div className="card">
      <div className="card-flag">
        <img src={br_flag} alt="Br Flag" />
      </div>
      <div className="card-body">
        <h6>Brazil</h6>
        <p>
          Population: <span>numero</span>
        </p>
        <p>
          Region: <span>numero</span>
        </p>
        <p>
          Capital: <span>numero</span>
        </p>
      </div>
    </div>
  );
}
