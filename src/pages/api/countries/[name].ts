import { NextApiRequest, NextApiResponse } from "next";
import countries from "../../../data.json";
import { ICountry } from "@/interfaces/country";

const formatData = (country: ICountry) => {
  return {
    name: country.name,
    nativeName: country.nativeName,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    flag: country.flags.svg,
    domain: country.topLevelDomain,
    currencies: country.currencies,
    languages: country.languages,
    borderCountries: country.borders,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = req.query.name;

  if (!name) return;

  const found = countries.find(
    (country) => country.name.toLowerCase() === name
  );

  if (!found) {
    res.status(404).json({ message: `${name} could not be found.` });
  }

  const formattedData = formatData(found as ICountry);

  res.status(200).json(formattedData);
}
