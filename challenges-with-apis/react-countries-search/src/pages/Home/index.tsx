import { useEffect, useState } from "react";
import { CountryCard } from "../../components/card";
import { CountriesModel } from "../../utils/countries.model";
import "./styles.css";

export function HomeComponent() {
  const url = "https://restcountries.com/v3.1/all";

  const [countryDetails, setCountryDetails] = useState<any>();

  let count = 1;

  useEffect(() => {
    async function getContries() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data[0].region);

        for (let i = 0; i <= data.length; i++) {
          count = i;
        }
        const gatherData = {
          country: data.name.common,
          population: data.population,
          region: data.region,
          capital: data.capital,
          flag: data.flags.svg,
        };
        // }
        setCountryDetails(() => [gatherData]);

        console.log(count);
      } catch (error) {}
    }

    getContries();
  });

  return (
    <div className="home-container">
      <div className="filter-section">
        <div className="filter-input">
          <button>
            <span className="search-btn" />
          </button>
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="filter-combo">
          <select name="countries-combo">
            <option value="1" defaultValue={1}>
              Filter by region
            </option>
            <option value="2">Music</option>
            <option value="2">Music</option>
            <option value="2">Music</option>
          </select>
        </div>
      </div>
      <div className="countries-cards-container">
        {countryDetails?.map((r: any) => (
          <CountryCard
            flag={r.flag}
            name={r.country}
            population={r.population}
            region={r.region}
            capital={r.capital}
          />
        ))}
      </div>
    </div>
  );
}
