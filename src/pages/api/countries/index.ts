import { NextApiRequest, NextApiResponse } from "next";
import countries from "../../../data.json";
import { ICountry } from "@/interfaces/country";

const formatData = (data: ICountry[]) => {
  return data.map((country) => {
    return {
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital,
      flag: country.flags.svg,
    };
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const response = await fetch("https://restcountries.com/v3.1/all");

  // const data = await response.json();

  const formattedData = formatData(countries as ICountry[]);

  res.status(200).json(formattedData);
}
