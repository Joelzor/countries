import { NextApiRequest, NextApiResponse } from "next";
import countries from "../../../data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const borderCountries = req.query.borderCountries;

  const filtered = countries
    .filter((country) => {
      if (borderCountries?.includes(country.alpha3Code)) {
        return country;
      }
    })
    .map((country) => country.name);

  res.status(200).json(filtered);
}
