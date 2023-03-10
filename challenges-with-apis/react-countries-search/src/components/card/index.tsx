import "./styles.css";
import { CountriesModel } from "../../utils/countries.model";

export function CountryCard(data: CountriesModel) {
  return (
    <div className="card">
      <div className="card-flag">
        <img src={data.flag} alt="Br Flag" />
      </div>
      <div className="card-body">
        <h6>{data.name}</h6>
        <p>
          Population: <span>{data.population}</span>
        </p>
        <p>
          Region: <span>{data.region}</span>
        </p>
        <p>
          Capital: <span>{data.capital}</span>
        </p>
      </div>
    </div>
  );
}
