import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles.css";

export function CountryDetailsComponent() {
  const url = "https://restcountries.com/v3.1/name/";

  const [getCountry, setCountry] = useState<any>([]);
  const [getLanguages, setLanguages] = useState<any>([]);
  const [getCurrency, setCurrency] = useState<any>([]);
  const [getBorders, setBorders] = useState<any>([]);

  const { id } = useParams();

  function goBack() {
    history.back();
  }

  useEffect(() => {
    fetch(url + id).then((resp) => {
      resp.json().then((data) => {
        setCountry(data[0]);

        setLanguages(Object.values(data[0].languages));
        setCurrency(Object.values(data[0].currencies));
        setBorders(Object.values(data[0].borders));

        let nativeName = Object.values(data[0].name.nativeName);

        console.log(Object.values(nativeName));
      });
    });
  }, []);

  return (
    <div className="content-container">
      <div className="actions-section">
        <button onClick={goBack}>
          <span /> Back
        </button>
      </div>
      <div className="details-container">
        <div className="flag-section">
          <img src={getCountry.flags?.svg} alt={id} />
        </div>
        <div className="details-gathered">
          <h1>{id}</h1>
          <div className="details-section">
            <div className="details-list-1">
              <ul>
                <li>
                  <strong>Native Name: </strong>
                  <span>{getCountry?.nativeName}</span>
                </li>
                <li>
                  <strong>Population: </strong>
                  <span>{getCountry?.population}</span>
                </li>
                <li>
                  <strong>Region: </strong>
                  <span>{getCountry?.region}</span>
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  <span>{getCountry?.subregion}</span>
                </li>
                <li>
                  <strong>Capital: </strong>
                  <span>{getCountry?.capital}</span>
                </li>
              </ul>
            </div>
            <div className="details-list-2">
              <ul>
                <li>
                  <strong>Top Level Domain: </strong>
                  <span>{getCountry?.tld}</span>
                </li>
                <li>
                  <strong>Currencies: </strong>
                  {getCurrency?.map((cur: any, index: number) => (
                    <span key={index}>{cur.name}</span>
                  ))}
                </li>
                <li>
                  <strong>Languages: </strong>
                  {getLanguages?.map((lang: any, index: number) => (
                    <span key={index}> {lang},</span>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-countries-section">
            <strong>Border Countries: </strong>
            <div className="countries-tag-container">
              {getBorders?.map((border: any, index: number) => (
                <div key={index} className="border-countries-tags">
                  {border}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
