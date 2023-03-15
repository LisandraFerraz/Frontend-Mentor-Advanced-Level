import { useEffect, useState } from "react";
import { CountryCard } from "../../components/card";
import { CountriesModel } from "../../utils/countries.model";
import "./styles.css";

export function HomeComponent() {
  const url = "https://restcountries.com/v3.1/all";

  const [countryDetails, setCountryDetails] = useState<
    CountriesModel[] | any
  >();

  const [filterCountry, setFilterCountry] = useState("");
  const [searchCountry] = useState(["name"]);

  function handleSearch(e: any) {
    return e.filter((item: any) => {
      return searchCountry.some((search) => {
        return (
          item[search]
            .toString()
            .toLowerCase()
            .indexOf(filterCountry.toLocaleLowerCase()) > -1
        );
      });
    });
  }

  useEffect(() => {
    async function getContries() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);

        // const gatherData = {
        //   country: data.name.common,
        //   population: data.population,
        //   region: data.region,
        //   capital: data.capital,
        //   flag: data.flags.svg,
        // };
        setCountryDetails(data);
        setFilterCountry(data);
      } catch (error) {
        console.error(error);
      }
    }

    getContries();
  }, []);

  return (
    <div className="content-container">
      <div className="filter-section">
        <div className="filter-input">
          <button>
            <span className="search-btn" />
          </button>
          <input
            type="text"
            placeholder="Search for a country..."
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          />
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
        {countryDetails?.map((r: any, index: number) => {
          return (
            <CountryCard
              key={index}
              flag={r.flags.svg}
              name={r.name.common}
              population={r.population}
              region={r.region}
              capital={r.capital}
            />
          );
        })}
      </div>
    </div>
  );
}
