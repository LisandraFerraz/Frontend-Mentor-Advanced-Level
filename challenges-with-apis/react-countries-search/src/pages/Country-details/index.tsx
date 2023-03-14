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
  //   const countryDetails = getCountry.find((c: any) => c.name === id);

  useEffect(() => {
    fetch(url + id).then((resp) => {
      resp.json().then((data) => {
        setCountry(data[0]);

        setLanguages(Object.values(data[0].languages));
        setCurrency(Object.values(data[0].currencies));
        setBorders(Object.values(data[0].borders));

        console.log(Object.values(data[0].borders));
      });
    });
  }, []);

  return (
    <div>
      <p>Population: {getCountry?.population}</p>
      <p>Region: {getCountry?.region}</p>
      <p>Sub Region: {getCountry?.subregion}</p>
      <p>Capital: {getCountry?.capital}</p>
      <p>Top Level Domain: {getCountry?.tld}</p>
      {getBorders.map((border: any) => (
        <strong key={border}>Border Countries: {border}</strong>
      ))}
      {getCurrency.map((cur: any) => (
        <p key={cur}>Currency: {cur.name}</p>
      ))}

      {getLanguages.map((lang: any) => (
        <p key={lang}> {lang}</p>
      ))}

      <p>Native Name: {id}</p>
    </div>
  );
}
