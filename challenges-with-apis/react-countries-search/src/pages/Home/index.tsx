import { useEffect, useState } from "react";
import { CountryCard } from "../../components/card";
import { CountriesModel } from "../../utils/countries.model";
import "./styles.css";

export function HomeComponent() {
  const url = "https://restcountries.com/v3.1/";

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

  let teste: any;

  function filterByRegion(selection?: any) {
    teste = selection.target.value;

    console.log(teste);
  }

  function fetchUrl(urlProvided: string) {
    async function getContries() {
      try {
        const resp = await fetch(urlProvided);
        const data = await resp.json();

        setCountryDetails(data);
        setFilterCountry(data);
      } catch (error) {
        console.error(error);
      }
    }
    getContries();
  }

  useEffect(() => {
    console.log(teste);
    if (teste) {
      console.log("balls");
    } else {
      fetchUrl(url + `region/${teste}`);
    }
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
          <select name="countries-combo" onChange={filterByRegion}>
            <option value="0" defaultValue={"Africa"}>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Central America">Central America</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
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
